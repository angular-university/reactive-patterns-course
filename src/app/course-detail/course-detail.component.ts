import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute} from '@angular/router';
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";
import * as _ from 'lodash';
import {map} from 'rxjs/operators';


@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {


      route.params
          .subscribe( params => {

              const courseUrl = params['id'];

              this.db.list('courses', ref => ref.orderByChild('url').equalTo(courseUrl))
              .snapshotChanges()
              .pipe(
                map( data => data[0])
              )
              .subscribe(data => {
                  this.course = <Course>{
                    id: data.payload.key,
                    ...data.payload.val()
                  };

                  this.db.list('lessons', ref => ref.orderByChild('courseId').equalTo(data.payload.key))
                      .subscribe(lessons => this.lessons = lessons);
              });

          });

  }

  ngOnInit() {

  }

}
