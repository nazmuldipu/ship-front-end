import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysellsComponent } from './mysells.component';

describe('MysellsComponent', () => {
  let component: MysellsComponent;
  let fixture: ComponentFixture<MysellsComponent>;

  beforeEach(async(() => {
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
