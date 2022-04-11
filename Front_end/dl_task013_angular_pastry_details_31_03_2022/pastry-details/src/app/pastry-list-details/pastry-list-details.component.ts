import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pastry-list-details',
  templateUrl: './pastry-list-details.component.html',
  styleUrls: ['./pastry-list-details.component.css']
})
export class PastryListDetailsComponent implements OnInit {
  @Input() selected_pastry:any;
  constructor() { }

  ngOnInit(): void {
  }

}
