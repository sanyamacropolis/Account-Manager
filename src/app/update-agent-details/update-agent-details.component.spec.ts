import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgentDetailsComponent } from './update-agent-details.component';

describe('UpdateAgentDetailsComponent', () => {
  let component: UpdateAgentDetailsComponent;
  let fixture: ComponentFixture<UpdateAgentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAgentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
