import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminCategoryListComponent } from './admin-category-list.component';

describe('AdminCategoryListComponent', () => {
  let component: AdminCategoryListComponent;
  let fixture: ComponentFixture<AdminCategoryListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
