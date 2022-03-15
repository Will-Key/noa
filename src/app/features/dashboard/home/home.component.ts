import { Component, OnInit } from '@angular/core';
import { Stats } from './models';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datas: Stats[] = []
  title: string = 'Dashboard'
  subTitle: string = 'Home'

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getStats().subscribe((data) => this.datas = data)
  }

  trackByCard(index: number, card: Stats) {
    return card.count
  }

}
