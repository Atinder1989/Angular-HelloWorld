import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavourite = false
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("onclick");
    this.isFavourite = !this.isFavourite
  }
}
