import { Component, OnInit } from '@angular/core';
import { CaloriesCalculatorService } from '../services/CaloriesCalculator.service'

@Component({
  selector: 'app-ProgressBar',
  templateUrl: './ProgressBar.component.html',
  styleUrls: ['./ProgressBar.component.css']
})
export class ProgressBarComponent implements OnInit {

  /**
   * Gets the maximum calories per day
   *
   * @readonly
   * @type {number}
   * @memberof ProgressBarComponent
   */
  get limitCalories(): number {
    return this.calculatorService.limitCalories;
  }

  /**
   * Get the eaten calories in a day
   *
   * @readonly
   * @type {number}
   * @memberof ProgressBarComponent
   */
  get eatenCalories(): number {
    return this.calculatorService.eatenCalories;
  }

  constructor(private calculatorService: CaloriesCalculatorService) { }

  ngOnInit() {
  }

}
