import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../features/auth/store/auth.actions'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }

}
