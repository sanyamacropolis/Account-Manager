import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAgentDetailsComponent } from './selected-agent-details.component';

describe('SelectedAgentDetailsComponent', () => {
  let component: SelectedAgentDetailsComponent;
  let fixture: ComponentFixture<SelectedAgentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAgentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAgentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
