import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectAlert } from 'src/app/features/alert/store/alert.reducer';
import { ListService } from 'src/app/shared/services/list.service';
import { hasError } from 'src/app/utils';
import { errorMessages } from 'src/app/utils/error-message';
import { Adherent, AdherentSubscription, ParameterType } from '../../../models';
import { selectEntitledPersonSelected, selectLoading, selectPrincipalAdherentSelected } from '../../store/secondary-adherent.reducer';

@Component({
  selector: 'app-secondary-adherent-form',
  templateUrl: './secondary-adherent-form.component.html',
  styleUrls: ['./secondary-adherent-form.component.scss']
})
export class SecondaryAdherentFormComponent implements OnInit, OnDestroy {
  @ViewChild('myForm') myForm: NgForm
  @Output() isOnEditMode = new EventEmitter<boolean>()
  @Output() onSubmit = new EventEmitter<Adherent>()
  form: FormGroup
  subscription: Subscription = new Subscription()
  pieceType: ParameterType[]
  sexes: ParameterType[]
  loading: boolean = false
  photoUrl: string = "/assets/upload/upload.png"
  editMode: boolean = false
  entitledPersonSelected: Adherent
  adherentSelected: AdherentSubscription

  errorMessages = errorMessages

  constructor(private fb: FormBuilder, private router: Router, private store: Store, private listService: ListService) { }

  ngOnInit(): void {

    this.subscription.add(
      this.store.select(selectEntitledPersonSelected).subscribe((entitledPersonSelected) => {
        this.editMode = !!entitledPersonSelected
        this.entitledPersonSelected = entitledPersonSelected!
        this.initForm()
        this.setValueOfFormInEditMode()
      })
    )

    this.subscription.add(
      this.store.select(selectPrincipalAdherentSelected).subscribe((adherent) => {
        this.adherentSelected = adherent!
      })
    )

    this.subscription.add(
      this.store.select(selectLoading).subscribe((isLoading) => {
        this.loading = isLoading
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
      this.store.select(selectAlert).subscribe((alertState) => {
        if (alertState && alertState.type === 'success' && this.myForm.submitted ) {
          this.myForm.resetForm()
        }
      })
    )

    if (this.adherentSelected == null) {
      this.router.navigate(['/dashboard/adherent/secondary/list'])
    }
  }

  initForm() {
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
    })
  }

  setValueOfFormInEditMode() {
    console.log(this.entitledPersonSelected)
    if (this.entitledPersonSelected) {

      this.form.patchValue({ r_nom: this.entitledPersonSelected.r_nom })
      this.form.patchValue({ r_prenoms: this.entitledPersonSelected.r_prenoms })
      this.form.patchValue({ r_telephone: this.entitledPersonSelected.r_telephone })
      this.form.patchValue({ r_telephone_wha: this.entitledPersonSelected.r_telephone })
      this.form.patchValue({ r_date_naissance: this.entitledPersonSelected.r_date_naissance })
      this.form.patchValue({ r_sexe: this.entitledPersonSelected.r_sexe })
      this.form.patchValue({ r_type_piece: this.entitledPersonSelected.r_type_piece })
      this.form.patchValue({ r_numero_piece: this.entitledPersonSelected.r_numero_piece })
      this.form.patchValue({ r_email: this.entitledPersonSelected.r_email })
    }
  }

  pushData() {
    const toSend = {
      ...this.form.value,
      r_parent: this.adherentSelected.r_i,
      r_mutuelle: 1,
      r_statut: 1,
      r_photo: '',
      r_numero: this.entitledPersonSelected ? this.entitledPersonSelected.r_numero : ''
    }
    console.log(toSend)
    this.onSubmit.emit(toSend)
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
