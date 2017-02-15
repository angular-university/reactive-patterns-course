import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

    hoverSection: HTMLElement;


  ngOnInit() {

      this.hoverSection = document.getElementById('hover');

      this.hoverSection.addEventListener('mousemove', ev => {
         console.log(ev);
      });

  }

}
