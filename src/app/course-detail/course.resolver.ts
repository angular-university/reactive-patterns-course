import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Course} from "../shared/model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {Lesson} from "../shared/model/lesson";


@Injectable()
export class CourseDetailResolver implements Resolve<[Course, (Lesson[])]> {


    constructor(private coursesService: CoursesService) {

    }


    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<[Course, (Lesson[])]> {

        return this.coursesService.findCourseByUrl(route.params['id'])
            .do(course => console.log("course resolver returned"))
            .switchMap(course => this.coursesService.findLessonsForCourse(course.id),
                (course, lessons) => [course, lessons])
            .first();
    }


}