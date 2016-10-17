# Database Server

## The brief

You receive a message from a prospective employer:

"Before your interview, write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey.

During your interview, you will pair on saving the data to a file."

## Installation instructions

First, make sure you have both NPM and Node.js installed.

Next, follow these command line instructions:

```
$ git clone https://github.com/AbigailMcP/database-server.git
$ npm install
$ node app.js
```
The server will run on http://localhost:4000/. Save your key/value pair by navigating to http://localhost:4000/set?somekey=somevalue and updating the query string. Retrieve the stored value by navigating to http://localhost:4000/get?key=somekey, replacing 'somekey' with your specific key. The value will be displayed on the page.

Run tests via the command line using `$ npm test`.

## Notes

I used Express.js to build the server and Mocha Chai with Request for testing.
