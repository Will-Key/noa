import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  opened: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(isOpened: boolean) {
    this.opened = isOpened
  }

}
