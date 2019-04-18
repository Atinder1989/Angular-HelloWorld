import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titlecase',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {
  title = ""

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(){
    console.log("Enter Pressed and value is == " + this.title);
  }

}
