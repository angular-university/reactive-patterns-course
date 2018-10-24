import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses: Course[];
    latestLessons: Lesson[];

    constructor(private db: AngularFireDatabase) {

    }

    ngOnInit() {

        this.db.list('courses')
            .valueChanges()
            .do(console.log)
            .subscribe(
                data => this.courses = data
            );

        this.db.list('lessons', ref => ref.orderByKey().limitToLast(10))
            .valueChanges()
            .do(console.log)
            .subscribe(
                data => this.latestLessons = data
            );
    }

}
