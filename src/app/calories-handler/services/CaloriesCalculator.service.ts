import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
   * This flag will notify in case of passing the limit of calories
   *sesCalculatorService
   */
  overLimited = false;

  /**
   * Subject used to notify the change in the overLimited flag.
   *
   * @private
   * @memberof CaloriesCalculatorService
   */
  private subject = new Subject<boolean>();

  /**
   * The observable that will use the components to get notified by the subject.
   *
   * @memberof CaloriesCalculatorService
   */
  public subjectObservable = this.subject.asObservable();

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
    const newOverLimited = result > this.limitCalories;
    if (this.overLimited != newOverLimited) {
      this.overLimited = newOverLimited;
      this.subject.next(this.overLimited)
    }
    return result;
  }
  
  /**
   * Creates an instance of CaloriesCalculatorService.
   * @memberof CaloriesCalculatorService
   */
  constructor() { }

}
