import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { FormsModule } from '@angular/forms';

import {FilterPipe} from '../../filter.pipe';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent implements OnInit {

  listings:any;

  constructor(private firebaseServive:FirebaseService) { }

  ngOnInit() {
    this.firebaseServive.getListings().subscribe(listings =>{
      console.log(listings);
      this.listings = listings;
    });
  }

}
