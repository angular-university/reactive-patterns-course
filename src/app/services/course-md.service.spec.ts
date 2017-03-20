import { TestBed, inject } from '@angular/core/testing';

import { CourseMdService } from './course-md.service';

describe('CourseMdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseMdService]
    });
  });

  it('should ...', inject([CourseMdService], (service: CourseMdService) => {
    expect(service).toBeTruthy();
  }));
});
