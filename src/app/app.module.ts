import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { HeartSpinnerComponent } from './heart-spinner/heart-spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ScrollAnimationDirective,
    HeartSpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule,NgbModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
