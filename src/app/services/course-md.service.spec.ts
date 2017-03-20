import { TestBed, inject } from '@angular/core/testing';

import { LessonsPager } from './course-md.service';

describe('LessonsPager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonsPager]
    });
  });

  it('should ...', inject([LessonsPager], (service: LessonsPager) => {
    expect(service).toBeTruthy();
  }));
});
