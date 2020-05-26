import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundItIsComponent } from './page-not-found-it-is.component';

describe('PageNotFoundItIsComponent', () => {
  let component: PageNotFoundItIsComponent;
  let fixture: ComponentFixture<PageNotFoundItIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundItIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundItIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
