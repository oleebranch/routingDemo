import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListItIsComponent } from './department-list-it-is.component';

describe('DepartmentListItIsComponent', () => {
  let component: DepartmentListItIsComponent;
  let fixture: ComponentFixture<DepartmentListItIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListItIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListItIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
