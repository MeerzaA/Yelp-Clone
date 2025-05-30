import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import axios from 'axios'; // Install this library using npm/yarn

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { child, getDatabase, onValue, ref } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfLNVJF4FBY2oUFu33yp30sbL8WjkYwq0",
  authDomain: "dsci551proj-cafe-yelp-b8035.firebaseapp.com",
  databaseURL: "https://dsci551proj-cafe-yelp-b8035-default-rtdb.firebaseio.com",
  projectId: "dsci551proj-cafe-yelp-b8035",
  storageBucket: "dsci551proj-cafe-yelp-b8035.appspot.com",
  messagingSenderId: "999112911079",
  appId: "1:999112911079:web:7c3ea84a635e33f4a15a42",
  measurementId: "G-FCJLVYZ6HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);


// Using curl commands in TS

const ENDPOINT = [
  'https://dsci-studyyelp-1-default-rtdb.firebaseio.com/spots.json',
  'https://dsci-studyyelp-2-288ca-default-rtdb.firebaseio.com/spots.json'  
];


// search by name
async function fetchBusinessName(businessName: string): Promise<string[]> {
  const results: string[] = [];
  for (let dbIndex = 0; dbIndex < ENDPOINT.length; dbIndex++) {
    try {
      const url = `${ENDPOINT[dbIndex]}?orderBy="name"&equalTo="${businessName}"`;

      const response = await axios.get(url); // Await the response
      const data = response.data;
      console.log(`Firebase data loaded from database ${dbIndex}:`, data);
      results.push(JSON.stringify(data));
    } catch (error: any) {
      console.error('Fetch failed', error.message);
    }
  }
  return results; // return array of results
}

// Call the async function within an async context
/* const nameSearch = 'Our House Cafe';
(async () => {
  const retrievedData: string[] = await fetchBusinessName(nameSearch);
  const dataContainer = document.getElementById('data-container');
  if (dataContainer) {
    dataContainer.textContent = retrievedData.join('\n');
  }
})(); */


// search by zip
async function fetchBusinessZip(businessZip: string): Promise<string[]> {
  const results: string[] = [];
  for (let dbIndex = 0; dbIndex < ENDPOINT.length; dbIndex++) {
    try {
      const url = `${ENDPOINT[dbIndex]}?orderBy="name"&equalTo="${businessZip}"`;

      const response = await axios.get(url); // Await the response
      const data = response.data;
      console.log(`Firebase data loaded from database ${dbIndex}:`, data);
      results.push(JSON.stringify(data));
    } catch (error: any) {
      console.error('Fetch failed', error.message);
    }
  }
  return results; // return array of results
}

// Call the async function within an async context
/*const ZipSearch = '46038';
(async () => {
  const retrievedData: string[] = await fetchBusinessZip(ZipSearch);
  const dataContainer = document.getElementById('data-container');
  if (dataContainer) {
    dataContainer.textContent = retrievedData.join('\n');
  }
})();*/

// search by address
async function fetchBusinessAddress(businessAddress: string): Promise<string[]> {
  const results: string[] = [];
  for (let dbIndex = 0; dbIndex < ENDPOINT.length; dbIndex++) {
    try {
      const url = `${ENDPOINT[dbIndex]}?orderBy="address"&equalTo="${businessAddress}"`;

      const response = await axios.get(url); // Await the response
      const data = response.data;
      console.log(`Firebase data loaded from database ${dbIndex}:`, data);
      results.push(JSON.stringify(data));
    } catch (error: any) {
      console.error('Fetch failed', error.message);
    }
  }
  return results; // return array of results
}

// Call the async function within an async context
/*const addresSearch = '11850 Allisonville Rd';
(async () => {
  const retrievedData: string[] = await fetchBusinessName(addresSearch);
  const dataContainer = document.getElementById('data-container');
  if (dataContainer) {
    dataContainer.textContent = retrievedData.join('\n');
  }
})(); */


