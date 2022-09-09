import {Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

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
        window.localStorage.setItem('name',result.name);
        window.localStorage.setItem('age',result.age);
        window.localStorage.setItem('weight',result.weight);
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
export class DialogForm implements OnInit {

  /**
   * FormGroup property for the form control that will use it to validate the fields
   *
   * @type {FormGroup}
   * @memberof DialogForm
   */
  contactForm! : FormGroup

  /**
   * Creates an instance of DialogForm.
   * @param {MatDialogRef<InformationDialogComponent>} dialogRef
   * @param {DialogData} data
   * @memberof DialogForm
   */
  constructor(
    public dialogRef: MatDialogRef<InformationDialogComponent>,
    private readonly formBuilder : FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  /**
   * Initialize the formgroup property so the form can validate the fields
   *
   * @return {*}  {FormGroup}
   * @memberof DialogForm
   */
  initForm() : FormGroup{
    return this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      age: ['',[Validators.required]],
      weight: ['',[Validators.required]],
    })
  }
}
