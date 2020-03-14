import { async, TestBed } from '@angular/core/testing';
import { BaseModule } from './base.module';

describe('BaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BaseModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BaseModule).toBeDefined();
  });
});
