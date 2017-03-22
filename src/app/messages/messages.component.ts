import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]>;

  constructor(private messagesService:MessagesService) {

  }

  ngOnInit() {

        this.errors$ = this.messagesService.errors$;

  }

    close() {
      this.messagesService.error();
    }

}
