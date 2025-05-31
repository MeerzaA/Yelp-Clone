<h1 align="center">Cafe Yelp</h1>

<h2 align="center">File Structure</h2>

Our project is split between two programs, one for our users and another for the data administrator. All user interactions are done with our live web app via the above link, and all data administration is done with our Python program, main.py, using the CLI. 

The file structure for our project is as follows:

[./main.py](/main.py) | handles all data administration tasks, open a terminal in the root directory and run the commands listed above each function in `__main__`. 

[./WebApp](/WebApp/) | This directory contains all web app files. It is mainly for viewing since our program is live, and you can interact with it via the link.   
  
Inside the `./WebApp` directory, there are several files that can be ignored, and one directory is called `hosting/.`

To view our web app codebase, navigate to [./WebApp/hosting/src](/WebApp/hosting/src), which contains all the necessary program files: `index.html`, `main.ts`, and styles.css`.

We used Angular for our frontend framework, and all of our website components are stored individually, these files can be viewed in [/src/app](/WebApp/hosting/src/app), Note that we talked about the individual components in dept in our implementation video. 
