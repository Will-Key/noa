import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectAlert } from 'src/app/features/alert/store/alert.reducer';
import { ListService } from 'src/app/shared/services/list.service';
import { hasError } from '../../../../../../utils';
import { errorMessages } from '../../../../../../utils/error-message';
import { Adherent, AdherentSubscription, Product, Agent, ParameterType } from '../../../models';
import * as PrincipalAdherentActions from '../../store/principal-adherent.actions'
import { selectLoading, selectPrincipalAdherentSelected } from '../../store/principal-adherent.reducers';

@Component({
  selector: 'app-principal-adherent-form',
  templateUrl: './principal-adherent-form.component.html',
  styleUrls: ['./principal-adherent-form.component.scss'],
})
export class PrincipalAdherentFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('agent') agent: ElementRef;
  @ViewChild('myForm', { static: false }) myForm: NgForm | null = null
  @Output() submit = new EventEmitter<AdherentSubscription>()
  @Output() isOnEditMode = new EventEmitter<boolean>()
  photoUrl: string = "/assets/upload/upload.png"
  fileToUpload: File | null = null
  agentList: Agent[] = []
  pieceType: ParameterType[]
  sexes: ParameterType[]
  products: Product[]
  adherent: Adherent | null = null
  adherentSubs: AdherentSubscription | null = null
  phonePattern = '^[1-9][0-9]*$'
  errorMessages = errorMessages
  productError = false
  editMode: boolean = false
  loading: boolean = false
  agentSelected: string = ''
  deathChecked = false
  surgeryChecked = false
  form: FormGroup
  product: FormGroup
  isSubmitted: boolean = false

  subscription: Subscription = new Subscription()

  constructor(
    private fb: FormBuilder, 
    private store: Store,
    private listService: ListService
  ) {
    //this.initForm()
  }

  ngOnInit(): void {

    this.subscription.add(
      this.listService.fetch({ p_code: 'REQ003', p_arguments: ''}).subscribe((response) => {
        this.agentList = response.contenu
      })
    )

    this.subscription.add(
      this.listService.fetch({ p_code: 'REQ001', p_arguments: ''}).subscribe((response) => {
        console.log(response.contenu)
        this.products = response.contenu
      })
    )

    this.subscription.add(
      this.listService.fetch({ p_code: 'REQ008', p_arguments: "where tp.r_code='TPP'"}).subscribe((response) => {
        this.pieceType = response.contenu
      })
    )

    this.subscription.add(
      this.listService.fetch({ p_code: 'REQ008', p_arguments: "where tp.r_code='SEX'"}).subscribe((response) => {
        this.sexes = response.contenu
      })
    )

    this.subscription.add(
      this.store.select(selectPrincipalAdherentSelected).subscribe((adherentSelected) => {
        this.editMode = !!adherentSelected
        if (this.editMode) this.isOnEditMode.emit(true)
        this.adherentSubs = adherentSelected
        this.initForm()
        this.setValueOfFormInEditMode()
      })
    )

    this.subscription.add(
      this.store.select(selectLoading).subscribe((isLoading) => {
        this.loading = isLoading
      })
    )

    this.subscription.add(
      this.store.select(selectAlert).subscribe((mode) => {
        if (mode?.type !== 'error' && this.myForm?.submitted) {
          this.resetForm()
        }
      })
    )

  }

  ngAfterViewInit(): void {
    this.agent.nativeElement.value = this.adherentSubs ? this.adherentSubs!.r_agent[0].r_nom + ' ' + this.adherentSubs!.r_agent[0].r_prenoms : ''
  }

  initForm() {

    this.product = this.fb.group({
      death: [false, Validators.required],
      surgery: [false]
    })

    this.form = this.fb.group({
      r_nom: ['', Validators.required],
      r_prenoms: ['', Validators.required],
      r_telephone: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      r_telephone_wha: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      r_date_naissance: ['', Validators.required],
      r_sexe: ['', Validators.required],
      r_type_piece: ['', Validators.required],
      r_numero_piece: ['', Validators.required],
      r_email: ['', [Validators.required, Validators.email]],
      r_agent: ['', Validators.required],
    })
    
  }

  setValueOfFormInEditMode() {
    if (this.adherentSubs !== null) {
      this.product.patchValue({ death: this.adherentSubs?.r_produit[0].r_statut === 1 ? true : false })
      this.product.patchValue({ surgery: this.adherentSubs?.r_produit[1].r_statut === 1 ? true : false })
    
      this.form.patchValue({ r_nom: this.adherentSubs.r_nom })
      this.form.patchValue({ r_prenoms: this.adherentSubs.r_prenoms })
      this.form.patchValue({ r_telephone: this.adherentSubs.r_telephone })
      this.form.patchValue({ r_telephone_wha: this.adherentSubs.r_telephone })
      this.form.patchValue({ r_date_naissance: this.adherentSubs.r_date_naissance })
      this.form.patchValue({ r_sexe: this.adherentSubs.r_sexe })
      this.form.patchValue({ r_type_piece: this.adherentSubs.r_type_piece })
      this.form.patchValue({ r_numero_piece: this.adherentSubs.r_numero_piece })
      this.form.patchValue({ r_email: this.adherentSubs.r_email })
      this.form.patchValue({ r_agent: this.adherentSubs.r_agent[0].r_i })
    }
  }

  pushData() {
    const productChosen: Partial<Product>[] = []

    if (this.productState == false) {
      this.productError = true
      return
    }

    if (this.product.value.death) {
      productChosen.push({ r_produit: 1, r_reference: '', r_periodicite_paiement: 1})
    }  
    if (this.product.value.surgery) {
      productChosen.push({ r_produit: 2, r_reference: '', r_periodicite_paiement: 1})
    }
    
    const form: AdherentSubscription = {
      ...this.form.value,
      r_agent: this.form.value.r_agent,
      r_produit: productChosen,
      r_parent: 0,
      r_photo: '',
      r_adresse: '',
      r_numero: this.adherentSubs ? this.adherentSubs.r_numero : '',
      r_mutuelle: 1,
      r_statut: 1
    }

    this.store.dispatch(PrincipalAdherentActions.TRY_CREATE_ADHERENT({ payload: form }))
  }

  resetForm() {
    this.myForm?.resetForm()
    this.form.reset()
    this.product.reset()
    this.agent.nativeElement.value = ''
  }

  onChoiseProduct() {
    if (this.productState == false) {
      this.productError = false
    }
  }

  get productState() {
    return this.product.value.death || this.product.value.surgery
  }

  onSelectAgent(agentSelect: any) {
    const agentSelected = this.agentList.find((agent) => agent.r_i == agentSelect.value)!
    this.agent!.nativeElement.value = agentSelected.r_nom + ' ' + agentSelected.r_prenoms
  }

  handleFileInput(file: any) {
    console.log(file)
    // this.fileToUpload = file.item(0)!

    // let reader = new FileReader()
    // reader.onload = (event: any) => {
    //   this.photoUrl = event.target.result
    // }
    // reader.readAsDataURL(this.fileToUpload!)
  }

  hasError(controlName: string, errorKey: string) {
    return hasError(this.form, controlName, errorKey)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
