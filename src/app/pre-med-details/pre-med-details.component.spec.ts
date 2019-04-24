import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMedDetailsComponent } from './pre-med-details.component';

describe('PreMedDetailsComponent', () => {
  let component: PreMedDetailsComponent;
  let fixture: ComponentFixture<PreMedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreMedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreMedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
