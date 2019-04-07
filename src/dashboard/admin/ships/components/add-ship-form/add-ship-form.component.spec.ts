import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShipFormComponent } from './add-ship-form.component';

describe('AddShipFormComponent', () => {
  let component: AddShipFormComponent;
  let fixture: ComponentFixture<AddShipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
