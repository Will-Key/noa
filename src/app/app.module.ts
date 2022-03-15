import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { RequestsInterceptor } from './shared/interceptors/requests.interceptor';
import { AppEffects } from './store/app.effects';
import { reducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([])
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: RequestsInterceptor, multi: true },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
