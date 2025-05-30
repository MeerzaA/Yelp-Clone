import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import axios from 'axios';
//import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  searchCriteria: string = 'zipcode';
  constructor(private router: Router) {}
  city: string = ''; 
  state: string = ''; 

  //https://gist.github.com/tleen/6299431
  stateNames: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  //state list
  addStateList(stateNames: any[]): void {


    const StateContainer = document.getElementById("states");
    if (StateContainer) {
      StateContainer.innerHTML = " ";


      stateNames.forEach((item: any) => { 
          const state_option = document.createElement("option");


      StateContainer.appendChild(state_option);})

      }
  }
  
  
  onSearchZip(businessZip: string) {
    if (businessZip) {
      this.router.navigate(['/search'], { state: { businessZip: businessZip } });    
    }
    const businessZipInt: number = parseInt(businessZip);
    //this.getZipCoords(businessZipInt)
  }
  onSearchName(businessName: string) {
    if (businessName) {
      this.router.navigate(['/search'], { state: { businessName: businessName } });    
    }
  }


//https://api-ninjas.com/api/geocoding
//need to make this [lat, long]
/*getUserCoords(city: string, state: string) {
  //npm install --save-dev @types/jquery
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
        headers: { 'X-Api-Key': 'S7ZzbnQD1T2J4qnYVixIGw==rFMp3Y5sieHrFGsP'},
        contentType: 'application/json',
        success: function(result: any) {
            const stateResult = (result.find((item: any) => item.state.toLowerCase() === state.toLowerCase()));
            const lat = stateResult.latitude;
            const long = stateResult.longitude;
            //console.log('info', stateResult);
            //console.log('lat', lat);
            //console.log('long', long);
            const coordinates: number[] = [];
            coordinates.push(stateResult.latitude);
            coordinates.push(stateResult.longitude);
            //console.log('LAT/LONG PAIR',coordinates);

        },
        error: function ajaxError(jqXHR: any) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
  }
*/    //GET ZIPCODE COORDS

/* getZipCoords(zipcode: number) {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/zipcode?zip=' + zipcode,
    headers: { 'X-Api-Key': 'S7ZzbnQD1T2J4qnYVixIGw==rFMp3Y5sieHrFGsP'},
    contentType: 'application/json',
    success: function(result) {
        //console.log('LAT/LONG OF ZIP',result);
        const coordinates: number[] = [];
        coordinates.push(result[0].lat);
        coordinates.push(result[0].lon);
        //console.log('LAT/LONG PAIR',coordinates);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
        }
    });


}*/

}