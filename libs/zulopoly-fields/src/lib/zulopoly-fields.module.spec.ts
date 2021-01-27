import { async, TestBed } from '@angular/core/testing';
import { ZulopolyFieldsModule } from './zulopoly-fields.module';

describe('ZulopolyFieldsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ZulopolyFieldsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ZulopolyFieldsModule).toBeDefined();
  });
});
