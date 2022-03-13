import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { SidenavComponent } from 'src/app/layout/sidenav/sidenav.component';
import { ToolbarComponent } from 'src/app/layout/toolbar/toolbar.component';
import { SidenavItemComponent } from 'src/app/layout/sidenav/sidenav-item/sidenav-item.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent,
    SidenavItemComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
