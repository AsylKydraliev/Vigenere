import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService{
  constructor(private http: HttpClient) {}

  postMessageEncode(message: Message) {
    return this.http.post(`http://localhost:5000/encode`,message);
  }

  postMessageDecode(message: Message) {
    return this.http.post(`http://localhost:5000/decode`, message);
  }
}
