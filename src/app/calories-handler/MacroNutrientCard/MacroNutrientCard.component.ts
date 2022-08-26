import { Component, Input, OnInit } from '@angular/core';
import { CaloriesCalculatorService} from '../services/CaloriesCalculator.service'

/**
 * Component of the card that contains the respective macronutrients that will be displayed
 *
 * @export
 * @class MacroNutrientCardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-MacroNutrientCard',
  templateUrl: './MacroNutrientCard.component.html',
  styleUrls: ['./MacroNutrientCard.component.css']
})
export class MacroNutrientCardComponent implements OnInit {

  /**
   * Count of the portions that have been eaten in the day
   *
   * @memberof MacroNutrientCardComponent
   */
  private countInternal = 0;

  get count(): number {
    return this.countInternal
  }

  set count(value: number) {
    if (value >= 0) {
      this.countInternal = value;
    }
    this.consumedCalories = this.count * this.caloriesPortion;
  }

  /**
   * Contains the value a macronutrient gives per portion.
   *
   * @memberof MacroNutrientCardComponent
   */
   @Input()
  caloriesPortion = 0;

  /**
   * Contains the total calories that have been consumed
   *
   * @memberof MacroNutrientCardComponent
   */
  consumedCalories = 0;

  /**
   * Title that will display the respective name of the macronutrient
   *
   * @memberof MacroNutrientCardComponent
   */
  @Input()
  title = '';

  /**
   * Link to the icon that will show the respective macronutrient
   *
   * @memberof MacroNutrientCardComponent
   */
  @Input()
  image = '';

  /**
   * Alt for the icon.
   *
   * @memberof MacroNutrientCardComponent
   */
  @Input()
  alt = '';

  /**
   * Creates an instance of MacroNutrientCardComponent.
   * @memberof MacroNutrientCardComponent
   */
  constructor(private calculatorService: CaloriesCalculatorService) { }

  /**
   * Angular LifeCycle
   *
   * @memberof MacroNutrientCardComponent
   */
  ngOnInit() {
    this.calculatorService.macroNutrients.push(this);
  }

  /**
   * Handler for the change of the count when one of the buttons get clicked
   *
   * @param {number} value
   * @memberof MacroNutrientCardComponent
   */
  countChangeHandler(value: number): void {
    this.count += value;
  }

}
