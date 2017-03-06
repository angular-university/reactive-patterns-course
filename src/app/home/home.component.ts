import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2';
import {Course} from "../shared/model/course";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: Course[];


  constructor(private db: AngularFireDatabase) {


  }


  ngOnInit() {

    return this.db.list('courses')
        .do(console.log)
        .subscribe(
            data => this.courses = data
        );

  }



}
