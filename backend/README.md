# Getting started

To get the Node server running locally:

option 1: 
1. Open a terminal
2. Direct to backend folder
3. Run `npm install`
Note: make sure mongo is running first
4. Run `npm start`



## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `api/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.


# resource: https://github.com/gothinkster/node-express-realworld-example-app