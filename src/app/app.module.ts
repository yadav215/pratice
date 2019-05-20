import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroPanelComponent } from './intro-panel/intro-panel.component';
import { RangeKmComponent } from './range-km/range-km.component';
import { IntroComponent } from './intro/intro.component';
import { PartnerComponent } from './partner/partner.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroPanelComponent,
    RangeKmComponent,
    IntroComponent,
    PartnerComponent,
    ContactFormComponent,
    FooterComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
