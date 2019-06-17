import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { PartnerComponent } from './partner/partner.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



const routesLink: Routes = [
  {
    path:'intro', component:IntroComponent
  },{
    path:'partner',component:PartnerComponent
  },{
    path:'contact',component:ContactFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesLink)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
