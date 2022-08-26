import { Component, OnInit } from '@angular/core';

/**
 * BusyLoader component to be displayed while developing new features
 *
 * @export
 * @class BusyLoaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-BusyLoader',
  templateUrl: './BusyLoader.component.html',
  styleUrls: ['./BusyLoader.component.css']
})
export class BusyLoaderComponent implements OnInit {

  /**
   * Creates an instance of BusyLoaderComponent.
   * @memberof BusyLoaderComponent
   */
  constructor() { }

  /**
   * Angular Lifecycle
   *
   * @memberof BusyLoaderComponent
   */
  ngOnInit() {
  }

}
