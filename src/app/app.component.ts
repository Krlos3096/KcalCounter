import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KcalCounter';

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
}
