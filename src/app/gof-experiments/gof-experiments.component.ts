import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'gof-experiments',
    templateUrl: './gof-experiments.component.html',
    styleUrls: ['./gof-experiments.component.css']
})
export class GofExperimentsComponent implements OnInit {


    hoverSection: HTMLElement;


    ngOnInit() {

        this.hoverSection = document.getElementById('gof-hover');

        this.hoverSection.addEventListener('mousemove', onMouseMove);

        this.hoverSection.addEventListener('click', onClick);

    }

    removeListeners() {

        console.log("Removing listener");
        this.hoverSection.removeEventListener('mousemove', onMouseMove);
    }

}


function onMouseMove(ev: MouseEvent) {
    console.log("mouse move", ev);
}


function onClick(ev: MouseEvent) {
    console.log("click", ev);
}

