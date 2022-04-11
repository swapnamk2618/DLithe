import { Component, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { pastries } from '../pastries_mock';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pastry-list',
  templateUrl: './pastry-list.component.html',
  styleUrls: ['./pastry-list.component.css']
})
export class PastryListComponent implements OnInit {
  li=pastries;

@Output () passDataToApp=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
     console.log();
     this.passDataToApp.emit()
  }

}
