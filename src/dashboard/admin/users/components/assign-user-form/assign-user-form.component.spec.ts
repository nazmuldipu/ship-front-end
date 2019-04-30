import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUserFormComponent } from './assign-user-form.component';

describe('AssignUserFormComponent', () => {
  let component: AssignUserFormComponent;
  let fixture: ComponentFixture<AssignUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
