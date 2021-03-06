// import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.scss']
// })
// export class SidenavComponent implements OnInit {
//   @Input() opened: boolean = true
//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, filter } from 'rxjs';
import { SidenavItem } from '../models/sidenav-item.model';
import { SubLink } from '../models/sublink.model';
import { generalSettingLinks, adherentLinks, recoveryLinks } from './links'

/** @title Responsive sidenav */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  opened: boolean = true
  private _mobileQueryListener: () => void;
  sidenavItems: SidenavItem[] = []
  private generalSettingSubLinks: SubLink[] = generalSettingLinks
  private adherentSubLinks: SubLink[] = adherentLinks
  private recoverySubLinks: SubLink[] = recoveryLinks

  private dashboardNavItem = {
    navLabel: 'Tableau de bord',
    navIcon: 'analytics',
    baseUrl: '/dashboard',
    subLinks: [],
    isDropdown: false,
  }

  currentRoute: string = ''
  private subscription: Subscription = new Subscription()

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private router: Router, 
    private store: Store
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.currentRoute = this.router.routerState.snapshot.url
    this.sidenavItems = this.getLinksForCurrentUser()
    this.subscription.add(this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url
      })
    )
  }

  private getLinksForCurrentUser() {
    const sidenavItems: SidenavItem[] = [this.dashboardNavItem]

    if (this.generalSettingSubLinks.length) {
      sidenavItems[sidenavItems.length] = this.getGeneralSettingNavItem(
        this.generalSettingSubLinks,
      )
    }

    if (this.adherentSubLinks.length) {
      sidenavItems[sidenavItems.length] =
        this.getAdherentNavItem(this.adherentSubLinks)
    }

    if (this.recoverySubLinks.length) {
      sidenavItems[sidenavItems.length] =
        this.getRecoveryNavItem(this.recoverySubLinks)
    }

    return sidenavItems
  }

  // private getTheAuthorizedSubLinks(links: SubLink[]) {
  //   return links.filter(
  //     (link) =>
  //       this.permissions?.includes(link.module) ||
  //       this.permissions?.includes('ALL'),
  //   )
  // }

  private getGeneralSettingNavItem(
    generalSettingsSubLinks: SubLink[],
  ): SidenavItem {
    return {
      navLabel: 'Param??tre g??n??raux',
      navIcon: 'settings',
      baseUrl: '/dashboard/general-settings',
      isDropdown: true,
      subLinks: generalSettingsSubLinks,
    }
  }

  private getAdherentNavItem(adherentSubLinks: SubLink[]): SidenavItem {
    return {
      navLabel: 'Adherent',
      navIcon: 'groups',
      baseUrl: '/dashboard/adherent',
      isDropdown: true,
      subLinks: adherentSubLinks,
    }
  }

  private getRecoveryNavItem(recoverySubLinks: SubLink[]): SidenavItem {
    return {
      navLabel: 'Recouvrement',
      navIcon: 'payments',
      baseUrl: '/dashboard/recovery',
      isDropdown: true,
      subLinks: recoverySubLinks,
    }
  }

  trackBySidenavItemLabel(index: number, item: SidenavItem): string {
    return item.navLabel
  }

  onToggle(isOpened: boolean) {
    this.opened = isOpened
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe()
  }
}
