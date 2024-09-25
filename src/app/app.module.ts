import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { HeartSpinnerComponent } from './heart-spinner/heart-spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LogoComponent } from './logo/logo.component';
import { AudioComponent } from './audio/audio.component';
import { WeddingComponent } from './wedding/wedding.component';
import { DressCodeComponent } from './dress-code/dress-code.component';
import { GiftComponent } from './gift/gift.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './contador/contador.component';
import { HoraComponent } from './hora/hora.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RestrictionComponent } from './restriction/restriction.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ScrollAnimationDirective,
    HeartSpinnerComponent,
    CalendarComponent,
    LogoComponent,
    AudioComponent,
    WeddingComponent,
    DressCodeComponent,
    GiftComponent,
    ConfirmComponent,
    HomeComponent,
    ContadorComponent,
    HoraComponent,
    CarouselComponent,
    RestrictionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule,NgbModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
