import { Component, OnInit } from '@angular/core';

/**
 * Title that will display the name of the user
 *
 * @export
 * @class TitleComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-Title',
  templateUrl: './Title.component.html',
  styleUrls: ['./Title.component.css']
})
export class TitleComponent implements OnInit {

  /**
   * getter for the name of the user that will be displayed
   *
   * @type {(string | null)}
   * @memberof TitleComponent
   */
  get name(): string | null {
    return window.localStorage.getItem('name');
  }

  /**
   * setter for the name of the user that will be displayed
   *
   * @type {(string | null)}
   * @memberof TitleComponent
   */
  set name(value: any) {
    window.localStorage.setItem('name', value);
  }

  /**
   * Creates an instance of TitleComponent.
   * @memberof TitleComponent
   */
  constructor() { }

  /**
   * Angular LifeCycle
   *
   * @memberof TitleComponent
   */
  ngOnInit() {
  }

}
