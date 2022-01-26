import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService{
  constructor(private http: HttpClient) {}

  postMessageEncode(message: Message) {
    this.http.post(`http://localhost:5000/encode`, JSON.stringify(message)).subscribe();
  }

  postMessageDecode(message: Message) {
    this.http.post(`http://localhost:5000/decode`, message).subscribe();
  }
}
