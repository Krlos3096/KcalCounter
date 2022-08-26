import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaloriesCalculatorService {

  /**
   * Contains all the macroNutrients components
   *
   * @type {any[]}
   * @memberof CaloriesCalculatorService
   */
  macroNutrients: any[] = [];

  /**
   * The goal of calories per day
   *
   * @memberof CaloriesCalculatorService
   */
  limitCalories = 2000

  /**
   * The eaten calories in a day
   *
   * @memberof CaloriesCalculatorService
   */
  get eatenCalories(): number {
    let result = 0;
    this.macroNutrients.forEach(element => {
      result += element.consumedCalories;
    });
    return result;
  }
  
  /**
   * Creates an instance of CaloriesCalculatorService.
   * @memberof CaloriesCalculatorService
   */
  constructor() { }

}
