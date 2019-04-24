import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAgentComponent } from './select-agent.component';

describe('SelectAgentComponent', () => {
  let component: SelectAgentComponent;
  let fixture: ComponentFixture<SelectAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
