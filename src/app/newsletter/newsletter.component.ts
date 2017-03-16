import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {NewsletterService} from "../services/newsletter.service";
import {UserService} from "../services/user.service";

@Component({
    selector: 'newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {

    firstName:string;

    constructor(
        private userService:UserService,
        private newsletterService:NewsletterService) {

    }

    ngOnInit() {
        this.userService.user$.subscribe(
            user => this.firstName = user.firstName
        );
    }

    subscribeToNewsletter(emailField) {
        this.newsletterService.subscribeToNewsletter(emailField.value)
            .subscribe(
                () => {
                    emailField.value = '';
                    alert('Subscription successful ...');
                },
                console.error
            );
    }

}
