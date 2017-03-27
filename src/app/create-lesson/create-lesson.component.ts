import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'create-lesson',
    templateUrl: './create-lesson.component.html',
    styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {

    form: FormGroup;


    constructor(private fb: FormBuilder) {

        this.form = this.fb.group({
            description: ['',Validators.required],
            url: ['',Validators.required],
            videoUrl: ['',[Validators.required]],
            tags: ['',Validators.required],
            longDescription: ['']
        });

    }

    ngOnInit() {
    }

}
