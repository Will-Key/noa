import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-adherent',
  templateUrl: './principal-adherent.component.html',
  styleUrls: ['./principal-adherent.component.scss']
})
export class PrincipalAdherentComponent implements OnInit {
  title: string = 'Adherent'
  subTitle: string = 'Principal'

  constructor() { }

  ngOnInit(): void {
  }

}
