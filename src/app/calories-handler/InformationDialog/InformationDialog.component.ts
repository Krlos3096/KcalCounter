import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * Data for the Dialog that will 
 *
 * @export
 * @interface DialogData
 */
export interface DialogData {
  name: string;
}

/**
 * Dialog component that will display the form that asks for the name of the user
 *
 * @export
 * @class InformationDialogComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-InformationDialog',
  template: '',
  styleUrls: ['./InformationDialog.component.css']
})
export class InformationDialogComponent implements OnInit {

  /**
   * Creates an instance of InformationDialogComponent.
   * @param {MatDialog} dialog
   * @memberof InformationDialogComponent
   */
  constructor(public dialog: MatDialog) {}

  /**
   * Angular Lifecycle
   *
   * @memberof InformationDialogComponent
   */
  ngOnInit(): void {
    const name = window.localStorage.getItem('name');
    if (!name) {
      const dialogRef = this.dialog.open(DialogForm, {
        width: '30%',
        data: {name: ''},
      });

      dialogRef.disableClose = true;
      dialogRef.afterClosed().subscribe(result => {
        window.localStorage.setItem('name',result);
      });
    }
  }
}

/**
 * The main dialog component
 *
 * @export
 * @class DialogForm
 */
@Component({
  selector: 'dialog-form',
  templateUrl: 'DialogForm.component.html',
})
export class DialogForm {

  /**
   * Creates an instance of DialogForm.
   * @param {MatDialogRef<InformationDialogComponent>} dialogRef
   * @param {DialogData} data
   * @memberof DialogForm
   */
  constructor(
    public dialogRef: MatDialogRef<InformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
