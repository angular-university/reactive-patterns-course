import { Component, OnInit } from '@angular/core';
import {LoadingService} from "./loading.service";
import {Observable} from "rxjs";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {

  }

  ngOnInit() {
      this.loading$ = this.loadingService.loading$;
  }

}
