/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MacroNutrientCardComponent } from './MacroNutrientCard.component';

describe('MacroNutrientCardComponent', () => {
  let component: MacroNutrientCardComponent;
  let fixture: ComponentFixture<MacroNutrientCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroNutrientCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroNutrientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
