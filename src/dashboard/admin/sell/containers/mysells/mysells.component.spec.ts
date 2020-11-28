import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MysellsComponent } from './mysells.component';

describe('MysellsComponent', () => {
  let component: MysellsComponent;
  let fixture: ComponentFixture<MysellsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MysellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
