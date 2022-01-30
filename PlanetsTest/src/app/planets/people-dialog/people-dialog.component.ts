import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from 'src/app/shared/models/peopleInterface';

@Component({
  selector: 'app-people-dialog',
  templateUrl: './people-dialog.component.html',
  styleUrls: ['./people-dialog.component.scss']
})
export class PeopleDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public peoples: People[],) { }

  ngOnInit(): void {
    
  }
}
