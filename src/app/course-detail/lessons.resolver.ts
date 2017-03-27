import {Lesson} from "../shared/model/lesson";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from "@angular/router";
import {CoursesService} from "../services/courses.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Course} from "../shared/model/course";


@Injectable()
export class LessonsResolver implements Resolve<Lesson[]> {

    course$: Observable<Course>;

    constructor(private coursesService: CoursesService, private route: ActivatedRoute) {

        this.course$ = route.data
            .do(course => console.log("course", course))
            .map(data => data['course']);

    }

    resolve(snap: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Lesson[]> {

        return this.course$
            .filter(course => !!course)
            .do(course => console.log("course", course))
            .switchMap((course: Course) => this.coursesService.findLessonsForCourse(course.id ))
            .first();
    }

}