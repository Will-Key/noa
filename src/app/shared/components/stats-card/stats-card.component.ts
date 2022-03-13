import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  @Input() title: string = ''
  @Input() total: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
