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

      this.sub =  mouseMove$.subscribe(
          ev => console.log("mousemove", ev)
      );


      const click$ = Observable.fromEvent(this.hoverSection, 'click');

      click$.subscribe(
          ev => console.log("click", ev)
      );

  }

    unsubscribe() {
      console.log('Called unsubscribe()');
      this.sub.unsubscribe();

    }

}

















