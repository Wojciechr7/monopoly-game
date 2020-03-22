import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RailwaysComponent} from './railways.component';

describe('RailwaysComponent', () => {
  let component: RailwaysComponent;
  let fixture: ComponentFixture<RailwaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RailwaysComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
