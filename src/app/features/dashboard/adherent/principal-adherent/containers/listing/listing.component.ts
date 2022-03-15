import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  title: string = 'Adherent';
  subTitle: string = 'Principal';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openForm() {
    this.router.navigate(['/dashboard/adherent/principal/form']);
  }
}
