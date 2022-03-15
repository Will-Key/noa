import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Router } from '@angular/router'

export interface SubLink {
  module: string
  path: string
  label: string
}
@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnChanges {
  isOpen = false
  @Input() isDropdown: boolean = false
  @Input() navLabel: string = ''
  @Input() navIcon: string = ''
  @Input() subLinks: SubLink[] = []
  @Input() baseUrl: string = ''
  @Input() currentRoute: string = ''

  parentIsActive: boolean = false

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentRoute']) {
      const currentRoute: string = changes['currentRoute'].currentValue
      this._activateRoute(currentRoute.split('/'), this.baseUrl.split('/'))
    }
  }

  navigateToParent() {
    if (!this.isDropdown) this.router.navigateByUrl(this.baseUrl)
  }

  onToggle() {
    this.navigateToParent()
    this.isOpen = !this.isOpen
  }

  private _activateRoute(currentRoute: string[], baseUrl: string[]) {
    this.parentIsActive = false
    if (currentRoute.length > 2) {
      this.parentIsActive = currentRoute[2] === baseUrl[2]
    } else if (currentRoute.length === 2 && baseUrl.length === 2) {
      this.parentIsActive = currentRoute[1] === baseUrl[1]
    }
  }

  trackBySubLinkLabel(index: number, subLink: SubLink) {
    return subLink.label
  }
}
