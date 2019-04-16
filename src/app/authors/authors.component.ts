import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authorsList;

  constructor(service:AuthorsService) {
      this.authorsList = service.getAuthors()
      console.log(this.authorsList)
   }

  ngOnInit() {
  }

}
