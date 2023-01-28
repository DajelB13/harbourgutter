import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //REVISIT THIS (research *ngFor)
  /*
  testimonials = [
    {quote: "Very professional and fair with their work and quote.", author: "- Arifuku T."},
    {quote: "Great service and excellent work. They were in and out quickly and were very tidy with their work. I’ve had lots of " +
        "experience with tradespeople where I ended up cleaning after them.  Highly recommend.", author: "- Sheila B."},
    {quote: "I needed my gutters done ASAP as the water was getting into the basement. Although being fully booked, they made sure " +
        "to accommodate us before a string of rainy days came.", author: "- Ashley P."}
  ]

   */

  testimonialsQuote = [
    "Very professional and fair with their work and quote.",
    "Great service and excellent work. They were in and out quickly and were very tidy with their work. I’ve had lots of experience with tradespeople where I ended up cleaning after them.  Highly recommend.",
    "I needed my gutters done ASAP as the water was getting into the basement. Although being fully booked, they made sure to accommodate us before a string of rainy days came."
  ];
  testimonialsAuthor = [
    "- Arifuku T.",
    "- Sheila B.",
    "- Ashley P."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
