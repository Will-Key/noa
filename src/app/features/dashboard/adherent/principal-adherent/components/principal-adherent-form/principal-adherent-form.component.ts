import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { hasError } from '../../../../../../utils';
import { errorMessages } from '../../../../../../utils/error-message';
import { Adherent, AdherentSubscription } from '../../../models';

@Component({
  selector: 'app-principal-adherent-form',
  templateUrl: './principal-adherent-form.component.html',
  styleUrls: ['./principal-adherent-form.component.scss'],
})
export class PrincipalAdherentFormComponent implements OnInit {
  @ViewChild('agent') agent: ElementRef | undefined;
  @ViewChild('myForm', { static: false }) myForm: NgForm | null = null
  agentList = [
    { value: 1, name: "TOURE CEDRICK" },
    { value: 2, name: "KOFFI OLIVIER"}
  ]
  adherent: Adherent | null = null
  subscription: AdherentSubscription | null = null
  phonePattern = '^[1-9][0-9]*$'
  errorMessages = errorMessages
  editMode: boolean = false
  agentSelected: string = ''
  deathChecked = false
  surgeryChecked = false
  form: FormGroup
  product: FormGroup

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.route.params.pipe(map((param) => this.editMode = !!param))

    this.product = fb.group({
      death: false,
      surgery: false
    })

    this.form = this.fb.group({
      r_nom: [this.subscription?.r_nom, Validators.required],
      r_prenoms: [this.subscription?.r_prenoms, Validators.required],
      r_telephone: [this.subscription?.r_telephone, Validators.required, Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(10)],
      r_telephone_wha: [this.subscription?.r_telephone, Validators.required, Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(10)],
      r_date_naissance: [this.subscription?.r_date_naissance, Validators.required],
      r_sexe: [this.subscription?.r_sexe, Validators.requiredTrue],
      r_type_piece: [this.subscription?.r_type_piece, Validators.required],
      r_numero_piece: [this.subscription?.r_numero_piece, Validators.required],
      r_photo: [this.subscription?.r_photo, Validators.required],
      r_email: [this.subscription?.r_adresse, Validators.required, Validators.email],
      r_agent: [this.subscription?.r_parent, Validators.required],
      death: [false],
      surgery: [false]
    })
  }

  ngOnInit(): void {
    //this.hasProductError()
  }

  // initForm() {
  //   this.product = this.fb.group({
  //     death: [this.subscription?.r_produit.r_produit === 1 ? true : false, Validators.required],
  //     surgery: [this.subscription?.r_produit.r_produit === 2 ? true : false]
  //   })

  //   this.form = this.fb.group({
  //     r_nom: [this.subscription?.r_nom, Validators.required],
  //     r_prenoms: [this.subscription?.r_prenoms, Validators.required],
  //     r_telephone: [this.subscription?.r_telephone, Validators.required, Validators.pattern('^[1-9][0-9]*$'), Validators.minLength(10)],
  //     r_date_naissance: [this.subscription?.r_date_naissance, Validators.required],
  //     r_sexe: [this.subscription?.r_sexe, Validators.required],
  //     r_type_piece: [this.subscription?.r_type_piece, Validators.required],
  //     r_numero_piece: [this.subscription?.r_numero_piece, Validators.required],
  //     r_photo: [this.subscription?.r_photo, Validators.required],
  //     r_adresse: [this.subscription?.r_adresse, Validators.required, Validators.email],
  //     r_agent: [this.subscription?.r_parent, Validators.required] 
  //   })
  // }

  pushData() {
    console.log(this.form.value)
  }

  onSelectAgent(agentSelect: any) {
    this.agent!.nativeElement.value = this.agentList.find((agent) => agent.value === agentSelect.value)?.name
  }

  hasError(controlName: string, errorKey: string) {
    return hasError(this.form, controlName, errorKey)
  }
}
