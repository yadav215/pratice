import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroPanelComponent } from './intro-panel/intro-panel.component';
import { RangeKmComponent } from './range-km/range-km.component';
import { IntroComponent } from './intro/intro.component';
import { PartnerComponent } from './partner/partner.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroPanelComponent,
    RangeKmComponent,
    IntroComponent,
    PartnerComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
