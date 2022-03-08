import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = ''
  @Input() subTitle: string = ''
  @Input() btnLabel: string = ''
  @Input() withButton: boolean = false
  @Output() onclick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onclick.emit()
  }

}
