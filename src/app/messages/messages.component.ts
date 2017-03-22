import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    messages$: Observable<string[]> = Observable.of(['testing 123']);

  constructor() {

  }

  ngOnInit() {

  }

}
