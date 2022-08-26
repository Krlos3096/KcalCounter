/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaloriesCalculatorService } from './CaloriesCalculator.service';

describe('Service: CaloriesCalculator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaloriesCalculatorService]
    });
  });

  it('should ...', inject([CaloriesCalculatorService], (service: CaloriesCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
