import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PowerPlantWaterworksComponent} from './power-plant-waterworks.component';

describe('PowerPlantWaterworksComponent', () => {
  let component: PowerPlantWaterworksComponent;
  let fixture: ComponentFixture<PowerPlantWaterworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PowerPlantWaterworksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPlantWaterworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
