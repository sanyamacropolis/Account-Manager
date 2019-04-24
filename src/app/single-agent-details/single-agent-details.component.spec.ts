import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgentDetailsComponent } from './single-agent-details.component';

describe('SingleAgentDetailsComponent', () => {
  let component: SingleAgentDetailsComponent;
  let fixture: ComponentFixture<SingleAgentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAgentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAgentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
