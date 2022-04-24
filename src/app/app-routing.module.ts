import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {TestimonialsComponent} from "./testimonials/testimonials.component";
import {ContactComponent} from "./contact/contact.component";
import {QuoteComponent} from "./quote/quote.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'quote', component: QuoteComponent },
  { path: '', component: HomeComponent }
  //Add wildcard route path: '**' with error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
