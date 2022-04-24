import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteForm = new FormGroup({
    name: new FormControl(''),
    phoneNum: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl('')
  });



    constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
      let email = {
        name: this.quoteForm.get('name')?.value,
        phoneNum: this.quoteForm.get('phoneNum')?.value,
        email: this.quoteForm.get('email')?.value,
        comment: this.quoteForm.get('email')?.value
      }
      console.log(email);
  }
}
