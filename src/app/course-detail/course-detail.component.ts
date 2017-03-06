import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2';



@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private db: AngularFireDatabase) {


  }

  ngOnInit() {
  }

}
