import { Component, NgModule, OnInit  } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { ActivatedRoute,Router, Params } from '@angular/router';
import axios from 'axios';
import 'bootstrap';
//import * as turf from "@turf/turf";

const ENDPOINT = [
  'https://dsci-studyyelp-1-default-rtdb.firebaseio.com/spots.json',
  'https://dsci-studyyelp-2-288ca-default-rtdb.firebaseio.com/spots.json'  
];


async function fetchBusinessZip(businessZip: string): Promise<string[]> {
  const results: string[] = [];
  for (let dbIndex = 0; dbIndex < ENDPOINT.length; dbIndex++) {
    try {
      const url = `${ENDPOINT[dbIndex]}?orderBy="postal_code"&equalTo="${businessZip}"`;
      const response = await axios.get(url); // Await the response
      const data = response.data;
      
      const dataArray = Object.keys(data).map(key => data[key]);
      console.log('Fetch business zip:', dataArray);
  
      return dataArray; 
    } catch (error: any) {
      console.error('Fetch failed', error.message);
    }
  }
  return results; 
}

async function fetchBusinessName(businessName: string): Promise<string[]> {
  const results: string[] = [];
  for (let dbIndex = 0; dbIndex < ENDPOINT.length; dbIndex++) {
    try {
      //find a way to change to include (first 3-4 characters)

      const truncatedName = businessName.substring(0, 7);

      const url = `${ENDPOINT[dbIndex]}?orderBy="name"&equalTo="${businessName}"`;

      const response = await axios.get(url); // Await the response
      const data = response.data;
      const dataArray = Object.keys(data).map(key => data[key]);
      console.log('Fetch business name:', dataArray);
  
      return dataArray; 
    } catch (error: any) {
      console.error('Fetch failed', error.message);
    }
  }
  return results; // return array of results
}


//Calculate how far a business it
/*function calcDist(coord1: number[], coord2: number[]): number {
  const options = { units: 'miles' } as { units?: turf.Units | undefined };
  const distance = turf.distance(turf.point(coord1), turf.point(coord2), options);
  console.log("Distance:", distance, "miles");

  return distance;
*/

//trying to get surrounding zipcodes
/*function SurroundingZips(zip: string | number): number[] {
  if string:
    const businessZipInt: number = parseInt(businessZip);
  cnt=1
  Ziplist number[] = [zip]
  For (i<=100) {
    Ziplist.push(zipcode+i)
    Ziplist.push(zipcode-i) 
    
    Count++;
  }
  return Ziplist
}*/

//display rating as stars
function showStar(rating: number): string {
  let starsHTML = '';
  //Only show number of stars that correspond to rating
  for (let i = 0; i < rating; i++) {
    starsHTML += `<svg width="30px" height="30px" viewBox="0 3 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 
    12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 
    8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 
    20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 
    14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 
    17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 
    17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 
    11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 
    19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 
    7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 
    9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 
    9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" 
    stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }
  return starsHTML;
}




//https://www.codeproject.com/Questions/1156482/How-to-make-dynamic-list-in-HTML
//https://stackoverflow.com/questions/53867808/dynamic-table-with-typescript-and-html
//https://www.youtube.com/watch?v=f-Chl4CVlTs
//https://dev.to/hcoco1/javascript-dynamic-list-the-dom-manipulation-10c5



//adding attributes to business card
function addCard(retrievedData: any[], search_entry: string): void {
  const resultcountContainer = document.getElementById("result-count");
  if (resultcountContainer) {
  resultcountContainer.innerHTML = `<p>Showing ${retrievedData.length } Results for: ${search_entry}</p>`;}
  
  const businessCardsContainer = document.getElementById("businesses");
  if (businessCardsContainer && retrievedData) {
    businessCardsContainer.innerHTML = " ";


      retrievedData.forEach((item: any) => { 
          const businessCard = document.createElement("div");
          businessCard.className = "business-card";



          //CSS is not working for these so i have to include here
          businessCard.style.backgroundColor = "#597c47";
          businessCard.style.width = "700px";
          businessCard.style.height = "auto";
          businessCard.style.padding = "20px";
          businessCard.style.marginTop = "20px";

        //I want picture, rating and name in at the top
        let cardContent = `<p>`
        if (item.categories.includes('Convenience Stores')) {
            cardContent += `<img src="../assets/khuc-le-thanh-danh-gFJRgtzPNVc-unsplash.jpg" width="300" height="200">`
            console.log(item.categories.includes('Restaurants'))
          }
        else if (item.categories.includes('Farmers Market') || item.categories.includes('Grocery') || item.categories.includes('Specialty Food')) {
          cardContent += `<img src="../assets/shelley-pauls-Zaiuy5dKeCk-unsplash.jpg" width="300" height="200">`
        }
        else if (item.categories.includes('Pizza')) {
          cardContent += `<img src="../assets/ivan-torres-MQUqbmszGGM-unsplash.jpg" width="300" height="200">`
        }
        else if (item.categories.includes('Fast Food')) {
          cardContent += `<img src="../assets/2150887950.jpg" width="300" height="200">`
        }
        else if (item.categories.includes('Delis')) {
          cardContent += `<img src="../assets/scott-hendrickson-3xVgYMGpU6k-unsplash.jpg" width="300" height="200">`
        }
        else if (item.categories.includes('Cafes') || item.categories.includes('Coffee & Tea')) {
          cardContent += `<img src="../assets/soothing-cinnamon-drink-casting-cozy-light-table.jpg" width="300" height="200">`
        }
        else if (item.categories.includes('Steakhouses')) {
          cardContent += `<img src="../assets/yuhan-du-qsqVYKxqlzs-unsplash.jpg" width="300" height="200">`
        }
        else if (item.categories.includes('Restaurants')) {
          cardContent += `<img src="../assets/7442.jpg" width="300" height="200">`
        }
        else if (item.categories.includes('Breweries')) {
          cardContent += `<img src="../assets/louis-hansel-WCm4dFvZnMM-unsplash.jpg" width="300" height="200">`
        }
        else {
          cardContent += `<img src="../assets/shelley-pauls-Zaiuy5dKeCk-unsplash.jpg" width="300" height="200">`

        }

          cardContent += `<p style="font-size: 40px;">${item.name}</p>`;

          //check if attributes are available and then add to business card
          if (item.stars) {
            cardContent += `<p> Rating: ${showStar(item.stars)} </p>`;
          }
          if (item.address && item.city && item.state && item.postal_code) {
            cardContent += `<p style="font-size: 20px;"> <svg width="40px" height="40px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>${item.address}, ${item.city}, ${item.state}, ${item.postal_code}</p>`;
          }
          if (item.attributes) {
            if (item.attributes.BikeParking) {
              cardContent += `<p><svg fill="#000000" width="40px" height="40px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M19 4 A 1.0001 1.0001 0 0 0 18.058594 5.3359375L19.367188 9L10.414062 9L9.7949219 8L11 8 A 1.0001 1.0001 0 1 0 11 6L8.1425781 6 A 1.0001 
              1.0001 0 0 0 8.0234375 5.9882812 A 1.0001 1.0001 0 0 0 7.8398438 6L7 6 A 1.0001 1.0001 0 1 0 7 8L7.4433594 8L8.8125 10.210938L7.4863281 13.195312C7.0096806
               13.072551 6.5137723 13 6 13C2.6981361 13 0 15.698136 0 19C0 22.301864 2.6981361 25 6 25C8.9603849 25 11.427922 22.82834 11.908203 20L15.416016 20 A 
               1.0007938 1.0007938 0 0 0 15.433594 20 A 1.0001 1.0001 0 0 0 15.441406 20 A 1.0007938 1.0007938 0 0 0 15.632812 19.980469 A 1.0001 1.0001 0 
               0 0 15.644531 19.976562 A 1.0007938 1.0007938 0 0 0 15.728516 19.955078 A 1.0001 1.0001 0 0 0 15.808594 19.927734 A 1.0007938 1.0007938 0 0 
               0 15.822266 19.921875 A 1.0001 1.0001 0 0 0 15.832031 19.917969 A 1.0007938 1.0007938 0 0 0 15.912109 19.876953 A 1.0001 1.0001 0 0 0 
               15.972656 19.841797 A 1.0007938 1.0007938 0 0 0 15.984375 19.833984 A 1.0001 1.0001 0 0 0 16.138672 19.708984 A 1.0007938 1.0007938 0 0 0 
               16.150391 19.697266 A 1.0001 1.0001 0 0 0 16.166016 19.677734 A 1.0007938 1.0007938 0 0 0 16.216797 19.621094 A 1.0001 1.0001 0 0 0 16.265625
                19.554688 A 1.0007938 1.0007938 0 0 0 16.267578 19.552734 A 1.0001 1.0001 0 0 0 16.316406 19.46875 A 1.0007938 1.0007938 0 0 0 16.324219
                19.453125 A 1.0001 1.0001 0 0 0 16.332031 19.439453L20.238281 11.441406L21.070312 13.771484C19.241926 14.802189 18 16.760917 18 19C18 
                22.301864 20.698136 25 24 25C27.301864 25 30 22.301864 30 19C30 15.698136 27.301864 13 24 13C23.642302 13 23.29399 13.036989 22.953125
                 13.097656L20.417969 6L22 6 A 1.0001 1.0001 0 1 0 22 4L19 4 z M 11.654297 11L18.226562 11L15.330078 16.933594L11.654297 11 z M 10.085938
                  12.267578L13.636719 18L11.908203 18C11.626418 16.340588 10.664706 14.906428 9.3144531 14.005859L10.085938 12.267578 z M 6 15C6.224635 
                  15 6.4400877 15.029439 6.6542969 15.064453L5.0859375 18.59375 A 1.0001 1.0001 0 0 0 6 20L9.8613281 20C9.4188032 21.72841 7.8729191 23 6 
                  23C3.7790164 23 2 21.220984 2 19C2 16.779016 3.7790164 15 6 15 z M 24 15C26.220984 15 28 16.779016 28 19C28 21.220984 26.220984 23 24 
                  23C21.779016 23 20 21.220984 20 19C20 17.613879 20.693063 16.400396 21.753906 15.683594L23.058594 19.335938 A 1.0001 1.0001 0 1 0 24.941406 
                  18.664062L23.644531 15.035156C23.763685 15.024634 23.877955 15 24 15 z M 8.4824219 15.878906C9.1509504 16.410155 9.6423248 17.144619 9.8613281 
                  18L7.5390625 18L8.4824219 15.878906 z"/>
              </svg> Bike Parking: ${item.attributes.BikeParking}</p>`;}
            //If true, display what type of parking is available
            if (item.attributes.BusinessParking) {
              cardContent += `<p> <svg width="40px" height="40px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 16V8H13C14.3807 8 15.5 9.11929 15.5 10.5C15.5 11.8807 14.3807 13 13 13H9.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 
              21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" 
              stroke-linejoin="round"/>
              </svg>Parking Options:  `
              if (item.attributes.BusinessParking.garage === true) {
                cardContent += "Garage  ";}
              if (item.attributes.BusinessParking.lot === true) {
                cardContent += "Lot  ";}
              if (item.attributes.BusinessParking.street === true) {
                cardContent += "Street  ";}
              if (item.attributes.BusinessParking.valet === true) {
                cardContent += "Valet  ";}
              if (item.attributes.BusinessParking.validated === true) {
                    cardContent += "Validated  ";}
              cardContent += "</p>"
              }
            if (item.attributes.DogsAllowed) {
              cardContent += `<p><svg height="35px" width="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 50 50" xml:space="preserve">
           <g>
             <path style="fill:#030104;" d="M39.041,36.843c2.054,3.234,3.022,4.951,3.022,6.742c0,3.537-2.627,5.252-6.166,5.252
               c-1.56,0-2.567-0.002-5.112-1.326c0,0-1.649-1.509-5.508-1.354c-3.895-0.154-5.545,1.373-5.545,1.373
               c-2.545,1.323-3.516,1.309-5.074,1.309c-3.539,0-6.168-1.713-6.168-5.252c0-1.791,0.971-3.506,3.024-6.742
               c0,0,3.881-6.445,7.244-9.477c2.43-2.188,5.973-2.18,5.973-2.18h1.093v-0.001c0,0,3.698-0.009,5.976,2.181
               C35.059,30.51,39.041,36.844,39.041,36.843z M16.631,20.878c3.7,0,6.699-4.674,6.699-10.439S20.331,0,16.631,0
               S9.932,4.674,9.932,10.439S12.931,20.878,16.631,20.878z M10.211,30.988c2.727-1.259,3.349-5.723,1.388-9.971
               s-5.761-6.672-8.488-5.414s-3.348,5.723-1.388,9.971C3.684,29.822,7.484,32.245,10.211,30.988z M32.206,20.878
               c3.7,0,6.7-4.674,6.7-10.439S35.906,0,32.206,0s-6.699,4.674-6.699,10.439C25.507,16.204,28.506,20.878,32.206,20.878z
                M45.727,15.602c-2.728-1.259-6.527,1.165-8.488,5.414s-1.339,8.713,1.389,9.972c2.728,1.258,6.527-1.166,8.488-5.414
               S48.455,16.861,45.727,15.602z"/>
           </g>
           </svg>  Dog Friendly: ${item.attributes.DogsAllowed}</p>`;}
            if (item.attributes.NoiseLevel) {
              cardContent += `<p><svg width="40px" height="40px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 
              21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903
              8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 
              11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 
              19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 
              7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 
              15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 
              3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="#000000" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
              </svg>Noise Level: ${item.attributes.NoiseLevel}</p>`;}
            if (item.attributes.OutdoorSeating) {
              cardContent += `<p><svg width="40px" height="40px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>Outdoor Seating: ${item.attributes.OutdoorSeating}</p>`;}
            if (item.attributes.RestaurantsGoodForGroups) {
              cardContent += `<p><svg width="40px" height="40px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>Group Friendly: ${item.attributes.RestaurantsGoodForGroups}</p>`;}
            if (item.attributes.WiFi) {
              cardContent += `<p> <svg width="40px" height="40px" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33309 8.07433C0.92156 8.44266 0.886539 9.07485 1.25487 9.48638C1.62319 9.89791 2.25539 9.93293 2.66691 9.5646L1.33309 
              8.07433ZM21.3331 9.5646C21.7446 9.93293 22.3768 9.89791 22.7451 9.48638C23.1135 9.07485 23.0784 8.44266 22.6669 8.07433L21.3331 
              9.5646ZM12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21V19ZM12.01 21C12.5623 21 13.01 20.5523 13.01 20C13.01 19.4477 
              12.5623 19 12.01 19V21ZM14.6905 17.04C15.099 17.4116 15.7315 17.3817 16.1031 16.9732C16.4748 16.5646 16.4448 15.9322 16.0363 15.5605L14.6905 
              17.04ZM18.0539 13.3403C18.4624 13.7119 19.0949 13.682 19.4665 13.2734C19.8381 12.8649 19.8082 12.2324 19.3997 11.8608L18.0539 13.3403ZM7.96372 
              15.5605C7.55517 15.9322 7.52524 16.5646 7.89687 16.9732C8.2685 17.3817 8.90095 17.4116 9.3095 17.04L7.96372 15.5605ZM4.60034 11.8608C4.19179 
              12.2324 4.16185 12.8649 4.53348 13.2734C4.90511 13.682 5.53756 13.7119 5.94611 13.3403L4.60034 11.8608ZM2.66691 9.5646C5.14444 7.34716 8.41371 
              6 12 6V4C7.90275 4 4.16312 5.54138 1.33309 8.07433L2.66691 9.5646ZM12 6C15.5863 6 18.8556 7.34716 21.3331 9.5646L22.6669 8.07433C19.8369 5.54138
              16.0972 4 12 4V6ZM12 21H12.01V19H12V21ZM12 16C13.0367 16 13.9793 16.3931 14.6905 17.04L16.0363 15.5605C14.9713 14.5918 13.5536 14 12 14V16ZM12 
              11C14.3319 11 16.4546 11.8855 18.0539 13.3403L19.3997 11.8608C17.4466 10.0842 14.8487 9 12 9V11ZM9.3095 17.04C10.0207 16.3931 10.9633 16 12 
              16V14C10.4464 14 9.02872 14.5918 7.96372 15.5605L9.3095 17.04ZM5.94611 13.3403C7.54544 11.8855 9.66815 11 12 11V9C9.15127 9 6.55344 10.0842 
              4.60034 11.8608L5.94611 13.3403Z" fill="#000000"/>
              </svg> WiFi: ${item.attributes.WiFi}</p>`;}

              ;
          }

          //https://getbootstrap.com/docs/4.0/components/collapse/
          /*if (item.hours) {
            cardContent += `<button class="btn btn-primary" type="button" data-toggle="collapse" 
            data-target="#allHoursCollapse" aria-expanded="false" aria-controls="allHoursCollapse">
            Hours of Operation
          </button>
          <div class="collapse" id="allHoursCollapse">
            <div class="card card-body">`;
            if (item.hours.Monday) {
              cardContent += `<p>Monday: ${item.hours.Monday}</p>`;}
            if (item.hours.Tuesday) {
              cardContent += `<p>Tuesday: ${item.hours.Tuesday}</p>`;}
            if (item.hours.Wednesday) {
              cardContent += `<p>Wednesday: ${item.hours.Wednesday}</p>`;}
            if (item.hours.Thursday) {
              cardContent += `<p>Thursday: ${item.hours.Thursday}</p>`;}
            if (item.hours.Friday) {
              cardContent += `<p>Friday: ${item.hours.Friday}</p>`;}
            if (item.hours.Saturday) {
              cardContent += `<p>Saturday: ${item.hours.Saturday}</p>`;}
            if (item.hours.Sunday) {
              cardContent += `<p>Sunday: ${item.hours.Sunday}</p>`;}
            cardContent += `</div></div>`;
          }*/
          
          if (item.reviews) {
            /*cardContent += `<button class="btn btn-primary" type="button" data-toggle="collapse" 
            data-target="#reviews" aria-expanded="true" aria-controls="reviews">
            Reviews
          </button>
          <div class="collapse" id="reviews">
            <div class="card card-body">`;*/
            cardContent += `<p> Reviews: </p>`;

            cardContent += `<p> ${item.reviews.text} </p>`;
            //console.log(item.name, item.reviews.text)
          }
          businessCard.innerHTML = cardContent;

          businessCardsContainer.appendChild(businessCard);
      });

  } else {
      console.error("retrievedData is not available or not an array.");
  }
}



@Component({

  selector: 'app-component',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class ContentComponent implements OnInit {

  sidebarVisible: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter();

  toggleSidebar() {
    console.log('Sidebar Visible:');
    this.sidebarVisible = !this.sidebarVisible;

  }

  businessZip: string | null = null;
  businessName: string | null = null;
  retrievedData: any[] = [];
  filteredData: any[] = [];
  showOnlyWiFi: boolean = false;
  showOnlyGroupFriendly: boolean = false;
  showOnlyDogFriendly: boolean = false;
  showOnlyOutdoorSeat: boolean = false;
  BusinessLength: number = 0
  search_string: string = 'hold'
  //option for quiet,avg,loud noise level



  constructor(private route: ActivatedRoute,private router: Router) {}
  

  ngOnInit(): void {
    this.businessZip = history.state.businessZip;
    this.businessName = history.state.businessName;

    if (this.businessZip) {
      this.search_string = this.businessZip;
      fetchBusinessZip(this.businessZip).then((data: any) => {
        this.retrievedData = data;
        //console.log('ngOnInit:', this.retrievedData);
        addCard(this.retrievedData, this.businessZip!);
      });
    }
    else if (this.businessName) {
      this.search_string = this.businessName;
      fetchBusinessName(this.businessName).then((data: any) => {
        this.retrievedData = data;
        //console.log('ngOnInit:', this.retrievedData);
        addCard(this.retrievedData, this.businessName!);
      });
    }
  }
    //filter businesses based on attributes
    //https://blog.logrocket.com/filtering-typescript-value-types/

  filterBusinesses(): void {
    let filtered = this.retrievedData;

    if (this.showOnlyWiFi) {
      filtered = filtered.filter((each_business) => {
        return each_business.attributes && (each_business.attributes.WiFi == "free" || each_business.attributes.WiFi == "'free'" ||each_business.attributes.WiFi == "Free" );
        
      });
      //console.log("filter:", filtered)
      addCard(filtered, this.search_string!);}
    if (this.showOnlyGroupFriendly) {
      filtered = filtered.filter((each_business) => {
        return each_business.attributes && each_business.attributes.RestaurantsGoodForGroups=="True";
      });
      //console.log("filter:", filtered)
      addCard(filtered, this.search_string!);}
    if (this.showOnlyDogFriendly) {
      filtered = filtered.filter((each_business) => {
        return each_business.attributes && each_business.attributes.DogsAllowed=="True";
      });
      //console.log("filter:", filtered)
      addCard(filtered, this.search_string!);}
    if (this.showOnlyOutdoorSeat) {
      filtered = filtered.filter((each_business) => {
        return each_business.attributes && each_business.attributes.OutdoorSeating=="True";
      });
      //console.log("filter:", filtered)
      addCard(filtered, this.search_string!);}
   else {
      addCard(filtered, this.search_string!)

    }
  }

  //https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
  handleWiFiCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox && checkbox.checked){
      //console.log(checkbox.value, "True")
      this.showOnlyWiFi = true;}
    else{
        //console.log(checkbox?.value, "False")
        this.showOnlyWiFi = false;}
    this.filterBusinesses();
  }

  handleGroupFriendlyCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox && checkbox.checked){
      //console.log(checkbox.value, "True")
      this.showOnlyGroupFriendly = true;}
    else{
        //console.log(checkbox?.value, "False")
        this.showOnlyGroupFriendly = false;}
    this.filterBusinesses();
  }
  handleDogFriendlyCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox && checkbox.checked){
      //console.log(checkbox.value, "True")
      this.showOnlyDogFriendly = true;}
    else{
       // console.log(checkbox?.value, "False")
        this.showOnlyDogFriendly = false;}
    this.filterBusinesses();
  }
  handleOutdoorSeatCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox && checkbox.checked){
      //console.log(checkbox.value, "True")
      this.showOnlyOutdoorSeat = true;}
    else{
        //console.log(checkbox?.value, "False")
        this.showOnlyOutdoorSeat = false;}
    this.filterBusinesses();
  }


}
