import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from "@angular/platform-browser";
import './../../assets/smtp.js';
import Swal from 'sweetalert2';

declare let Email: any;

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteForm = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([ \u00c0-\u01ffa-zA-Z\'\\-])+$')])),
    phoneNum: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^\\(?([0-9]{3})\\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$')])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('([a-z0-9][-a-z0-9_\\+\\.]*[a-z0-9])@([a-z0-9][-a-z0-9\\.]*[a-z0-9]\\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|me)|([0-9]{1,3}\\.{3}[0-9]{1,3}))')])),
    comment: new FormControl('', Validators.compose([Validators.required]))
  });

  submitted = false;



    constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onSubmit() {

      //Sanitize form field inputs prior to sending to Firestore
      const name = this.sanitizer.sanitize(1, this.quoteForm.value.name);
      const phoneNum = this.sanitizer.sanitize(1, this.quoteForm.value.phoneNum);
      const email = this.sanitizer.sanitize(1, this.quoteForm.value.email);
      const comment = this.sanitizer.sanitize(1, this.quoteForm.value.comment);

      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "Harbour.gutter@gmail.com",
        Password : "7AB4F45D2B66732E733C89946333287E9482",
        To : 'Harbour.gutter@gmail.com',
        From : "Harbour.gutter@gmail.com",
        Subject : "Quote From Website",
        Body : "Name: " + name + "<br />" + "Phone Number: " + phoneNum + "<br />" + "Email: " + email + "<br />" +
          "Work Description: " + comment
      }).then(
        message => console.log(message)
      );

    this.submitted = true;
    document.getElementById('submit').innerText = 'Submitted';
    this.successfulSubmit();
  }

  successfulSubmit(){
      // @ts-ignore
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Harbour Gutter will get back in touch with you soon!',
      type: 'success',
      confirmButtonColor: '#4BC8FF'});
  }
}
