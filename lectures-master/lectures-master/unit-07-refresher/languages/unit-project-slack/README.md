#Node-Calendar

##Goal
The goal of this challenge is to connect your server directly to MongoDB (database) using the express framework. Express is one of the most popular back-end frameworks build around Nodejs. Similar to front-end frameworks, it provides many useful utilities to organize your code. For example, instead of adding many conditionals directly in your http.createServer callback to handle all possible routes, e.g
````
http.createServer(function(request, response) {
  if (request.url === '/button' && request.method === 'POST') {
    // your here code
  }
});
````
Express organizes the code in the following format:
````
app.post('/button', middleWare);
````
The ```middeWare``` object is a callback that is called whenever a POST request is to made to ```/button```. Express is built around middleware. The dynamic benefit of middleware is that they can be chained together:
````
app.post('/social-security', authenticateUser, mySocialSecurityNumber);
````
There can be a dedicated callback to verify if the user has the appropriate credentials before allowing them access the following middleware that may provide sensitive data. The ```authenticateUser``` middleware can be used in any route that contains sensitive data(**D**on't **R**eapeat **Y**ourself);

##How do I get started
1. Run the following command into your terminal:
````
npm install
````

1. To start your node server (and compile your React.js files), run the following command:
````
npm start
````
```npm start``` is actually a npm script - it really runs the following command (you can look inside package.json):
````
node server/server.js
````

1. To open your page, visit "http://localhost:3000/"

1. [MongoDB](http://mongoosejs.com/docs/guide.html) is a database where all your chatroom messages are stored. Mongoose is a library that makes it easy for javascript to interact with MongoDB.
Inside [```server/message/messageModel.js```](./server/message/messageModel.js) is the ["schema"](https://en.wikipedia.org/wiki/Database_schema) for the messages. A schema is an expectation for how our data should look before we save it to the database. Here is a sample schema relating to how one would save a Person to a database:
![alt text](http://slick.typesafe.com/doc/2.1.0/_images/from-sql-to-slick.person-address.png)
The database requires that a Person have an ID, Name, Age, and Address. Looking inside at our [Message Schema](./server/message/messageModel.js), which properties do we require?

1. Our server's purpose is to accept requests (GET and POST) from a client and to allow them access (to fetch or input) messages from our database. However, in the process we may want to [Express middleware](http://expressjs.com/guide/using-middleware.html) will allows us to connect our client to our database.

**BONUS:**

1. Have you server check the authentication header and ensure that the client provides the correct token before allowing them to GET or POST messages. If they do not provide the correct token, then send the appropriate response.

1. Add a parameter that will allow the client to query the data in different forms:
  - the client can optionally request the data sorted in terms of recency (increasing and decreasing recency)
  - the client can specify a time range of messages
  - the client can specify messages from a specific user

##How do I test if my answer is correct?
Run the following code in your terminal to test your code:
````
npm test
````