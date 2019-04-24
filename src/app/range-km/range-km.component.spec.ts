import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeKmComponent } from './range-km.component';

describe('RangeKmComponent', () => {
  let component: RangeKmComponent;
  let fixture: ComponentFixture<RangeKmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeKmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeKmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
