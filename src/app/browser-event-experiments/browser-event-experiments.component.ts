import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

    hoverSection: HTMLElement;

    sub: Subscription;

  ngOnInit() {

      this.hoverSection = document.getElementById('hover');

      const mouseMove$ = Observable.fromEvent(this.hoverSection, 'mousemove');

      const click$ = Observable.fromEvent(this.hoverSection, 'click');

      const combined$  = click$.withLatestFrom(mouseMove$)
            .map(events => events[1]);

      combined$.subscribe(console.log);

  }

    unsubscribe() {
      console.log('Called unsubscribe()');
      this.sub.unsubscribe();

    }

}

















