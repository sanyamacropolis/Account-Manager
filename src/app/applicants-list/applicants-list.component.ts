import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.css']
})
export class ApplicantsListComponent implements OnInit {
  tableStatus:boolean=false;
  
  constructor() { }

  setTable()
  {
    this.tableStatus=!this.tableStatus;
  }
  ngOnInit() {
  }

}
