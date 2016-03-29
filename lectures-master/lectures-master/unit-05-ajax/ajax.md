# Ajax

---

![fit](ajax.jpg)

---

**just kidding**

---

#Ajax Basics
* Ajax is something we use on the client side.
* It stands for *A*synchronous *J*avaScript *a*nd *X*ML
* the page doesn't wait for it to finish
* it happens in the background

^ And we'll tlak a little more about that down the line

---

# Why would we load data asynchronously??

* Rather than have your page load data for everything.
* Load a list of items, then when you click on one, create an Ajax request to grab more info from your server on that particular item

---

#No refreshes

* Allows us to send and receive data in the background, we don't need to have the page refresh!
* Keeps our apps fast and responsive
* We only request/send the data that we want

^ Another huge benefit

---


#Asynchronicity
##Whats it mean when something happens asynchronously?

- we need to wait for it to finish

---
```JS
console.log('one');

someFuncThatTakes5Seconds(function(){
  console.log('two');
});
console.log('three');
```

---

#How

* Ajax uses good ole http requests! with all the methods and headers that go with that.
* We do this in JS by creating a XMLHttpRequest(), giving it a url, and calling `send` on it
* It gets pretty long however.
* And its a lot shorter...

---
#With jQuery

```js
var promise = $.ajax({
  method: "GET",
  dataType: "json",
  url: "/dogs"
  success: function(data, status, response ) {
    // do something with the data
  },
  error: function(data, status, response) {
    // handle the error response
  }
})
```

---

#Dissecting This
* Create the request by passing in URL, method, what datatype we want, headers etc.

---

#`POST`ing Data

```js
var payload = { "name": "Sparky" };
$.ajax({
  method: "POST",
  url: "/dogs",
  contentType: "application/json; charset=utf-8",
  dataType: 'json',
  data: JSON.stringify(payload),
}).done(function(data, status, response) {
    // ...
});
```

---
#jQuery shortcut methods

* `$.get(url)`
* `$.getJSON(url)`
* `$.post(url, obj)`

---

# Client and Server

**remember**, the client doesnt know about the server, the only way that they can communicate is through the client making HTTP requests, and the server sending responses

---

#Now what?

We can combine Ajax with the DOM manipulation we’ve already learned to get data from our servers, and display stuff interactively, then when users click, they can see new information, all without a page reload!


