import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPCItemComponent } from './spcitem.component';

describe('SPCItemComponent', () => {
  let component: SPCItemComponent;
  let fixture: ComponentFixture<SPCItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPCItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPCItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
