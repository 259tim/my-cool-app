import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  displayDetails = false;
  buttonClicks = 0;
  dateArray: Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(){
    this.displayDetails = !this.displayDetails;
    this.buttonClicks = this.buttonClicks + 1;
    this.dateArray.push(new Date())

  }


}
