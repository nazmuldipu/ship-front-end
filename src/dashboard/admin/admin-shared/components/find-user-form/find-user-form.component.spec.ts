import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FindUserFormComponent } from './find-user-form.component';

describe('FindUserFormComponent', () => {
  let component: FindUserFormComponent;
  let fixture: ComponentFixture<FindUserFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
