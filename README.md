<h1 align="center">Cafe Yelp</h1>

<h2 align="center">Run Commands</h2>

You can download and run the whole code base locally to test it. All interactions with our database are done through CURL commands for the user and the data administrators. Just so you know, you can interact with the web app without needing to run it locally since you can click the above link to access the web/user portion of the program. 

You must download some essential libraries in your terminal before running this project locally.

Download: [Nodejs](https://nodejs.org/en/download/current) & [Python](https://www.python.org/downloads/) 

You can open a terminal with the project files in the directory and run the following commands.

Install Python libraries: 
`pip3 install json` | `pip3 install requests` | `pip3 install sys` | `pip3 install uuid | pip3 install geopy`

Install Node libraries: 
`npm install firebase` | `npm install firebase-tools` `npm install -g @angular/cli` | `npm install axios` | `npm install bootstrap`

To launch the web app locally, open a terminal, cd into /WebApp/hosting/ and do: `ng serve,` then go to http://localhost:4200/home 

<h3 align="center">Webapp Query Instructions</h3>

Our web app queries are limited to what is in our Firebase real-time databases. 

**Here are some sample queries you can type in the search bar.** 

Select the **Zipcode** from the drop-down before clicking search.

**Zipcode:** `46184`, `18974`, `33701`

Select the **Business Name** from the drop-down before clicking search.

**Business Name:** `IHOP`, `Starbucks`, `Einstein Bros. Bagels` 

<h2 align="center">File Structure</h2>

Our project is split between two programs, one for our users and another for the data administrator. All user interactions are done with our live web app via the above link, and all data administration is done with our Python program, main.py, using the CLI. 

The file structure for our project is as follows:

[./main.py](/main.py) | handles all data administration tasks, open a terminal in the root directory and run the commands listed above each function in `__main__`. 

[./WebApp](/WebApp/) | This directory contains all web app files. It is mainly for viewing since our program is live, and you can interact with it via the link.   
  
Inside the `./WebApp` directory, there are several files that can be ignored, and one directory is called `hosting/.`

To view our web app codebase, navigate to [./WebApp/hosting/src](/WebApp/hosting/src), which contains all the necessary program files: `index.html`, `main.ts`, and styles.css`.

We used Angular for our frontend framework, and all of our website components are stored individually, these files can be viewed in [/src/app](/WebApp/hosting/src/app), Note that we talked about the individual components in dept in our implementation video. 
