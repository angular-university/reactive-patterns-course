import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../shared/model/lesson";


@Component({
  selector: 'custom-event-experiments',
  templateUrl: './custom-event-experiments.component.html',
  styleUrls: ['./custom-event-experiments.component.css']
})
export class CustomEventExperimentsComponent implements OnInit {


   myLessons: Lesson[] = [
       {
           id: 1,
           description: 'TEST 1'
       },
       {
           id: 1,
           description: 'TEST 2'
       }
   ];


  ngOnInit() {

  }




}
