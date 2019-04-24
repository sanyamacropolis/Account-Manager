import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.css']
})
export class AgentsListComponent implements OnInit {
  agentDetail()
  {
    console.log("agentselected");
    this.router.navigate(['./home/agents/agentselected']);
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
