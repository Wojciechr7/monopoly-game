import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GoToJailComponent} from './go-to-jail.component';

describe('GoToJailComponent', () => {
  let component: GoToJailComponent;
  let fixture: ComponentFixture<GoToJailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoToJailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToJailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
