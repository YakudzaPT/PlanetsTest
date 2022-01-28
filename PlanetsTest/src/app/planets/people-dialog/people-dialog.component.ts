import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/shared/models/peopleInterface';

@Component({
  selector: 'app-people-dialog',
  templateUrl: './people-dialog.component.html',
  styleUrls: ['./people-dialog.component.scss']
})
export class PeopleDialogComponent implements OnInit {

  public peoples: People []= [];
  constructor() { }

  ngOnInit(): void {
  }

}
