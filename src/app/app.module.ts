import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { QuoteComponent } from './quote/quote.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    TestimonialsComponent,
    ContactComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
