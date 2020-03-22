import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommunityChestComponent} from './community-chest.component';

describe('CommunityChestComponent', () => {
  let component: CommunityChestComponent;
  let fixture: ComponentFixture<CommunityChestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityChestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityChestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
