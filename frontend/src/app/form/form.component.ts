import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../model/message.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  @ViewChild('f') form!: NgForm;

  constructor(private httpService: HttpService) { }

  setFormValue(value: {[key: string]: any}){
    setTimeout( () => {
      this.form.form.setValue(value);
    })
  }

  onEncoded() {
    const message = new Message(
      this.form.value.decoded,
      this.form.value.password
    )
    this.httpService.postMessageEncode(message).subscribe(message => {
      this.setFormValue({
        decoded: '',
        encoded: (<Message>message).message,
        password: this.form.value.password,
      })
    });
  }

  onDecoded() {
    const message = new Message(
      this.form.value.encoded,
      this.form.value.password
    )
    this.httpService.postMessageDecode(message).subscribe(message => {
      this.setFormValue({
        encoded: '',
        decoded: (<Message>message).message,
        password: this.form.value.password,
      })
    });
  }
}
