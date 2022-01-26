import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../model/message.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @ViewChild('f') form!: NgForm;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onEncoded() {
    const message = new Message(
      this.form.value.decoded,
      this.form.value.password
    )
    this.httpService.postMessageEncode(message);
  }

  onDecoded() {
    const message = new Message(
      this.form.value.encoded,
      this.form.value.password
    )
    console.log(message)
    this.httpService.postMessageDecode(message);
  }
}
