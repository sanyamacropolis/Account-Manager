import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAgentComponent } from './pay-agent.component';

describe('PayAgentComponent', () => {
  let component: PayAgentComponent;
  let fixture: ComponentFixture<PayAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
