import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {NewsletterService} from "../services/newsletter.service";

@Component({
    selector: 'newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

    constructor(private userService: UserService,
                private newsletterService: NewsletterService) {

    }

    subscribe(email:string) {
        this.newsletterService.subscribeToNewsletter(email);
    }

}
