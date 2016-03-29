# DOM manipulation, jQuery

---

# Web API
* interface that lets us interact with the users browsers
*  massive list of interfaces that we can use to interact with the browser. The two that we're going to use are `window` and `document`
* `window` is the global object in the browser, represents a window containing the DOM document
* `document` is an interface that allows us to interact with the webpage

---

# Document 
* `document` is an entry point to the web page's content
* it is the actual page that is shown
* it provides functionality to access various properties of the document.

---


###The key part of understanding how webpages display and manipulate content is understanding the **DOM** or **Document Object Model**

---
## What does Document Object Model mean?

* A model of all the objects that the `document` is made up of!
* its a giant javascript object that we can play with!
* we can:
  * Change text!
  * Add new elements!
  * remove elements!
  * The list is endless!

--- 
# But what is it....

* A bunch of **nodes**!
* Just a representation of the document that we can access with javascript
* these nodes can have properties, and also listeners

---

# Take a look at this page here
```html
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    <h1>My Header</h1>
    <a href="#">My Link</a>
  </body>
</html>
```

---
![fit](./domtree.gif)

---

# **Do you see why this is called a node tree**

---
#Manipulating the DOM

- select nodes by calling different methods on `document`
- all paragraph tags = `getElementsByTagName('p')` 
- an element that has the ID of `foo` = `getElementById('foo')`
- Theres a ton of these. `document.querySelectorAll` is a great one

---

# Events

Events are things that happen on the page.
Clicking on a DOM node causes the browser to create an event object.
It then travels up through the DOM tree. (clicking on a child element inside of a parent obviously should register as a click on the parent as well)
Then it checks if there are *listeners* listening for that specific event on those DOMnodes


---
#Listeners

What do you think an event listener is?

Just something that listens for an event. Examples of events are mouse clicks, the page loading, mouse hovers etc etc. Pretty much everything in the page.

If you add a listener on a node, it allows you to run a function when that event happens.

--- 

# Example 

alert someone when they click a button

Select a DOM node and then call `addEventListener`

It takes two arguments, the event we want to listen for, and a callback function we want executed when that event occurs. 

The actual event object that is created is passed to the callback function[^1]

[^1]: For fun, check out all the different events that are out there, and inspect the actual objects.

---

```js
var button = document.getElementById('mybutton');
button.addEventListener('click', function(event) {
  alert('clicked');
});
```
---

#jQuery

jQuery is a javascript library that abstracts away some of these complexities and gives us a cleaner syntax to manipulate the DOM

To access the library we use `$`

To select an element with id of foo rather than use `document.getElementById('foo')` we call `$('#foo')`

Similarly, to add a click listener we call
`$('#foo').on('click',....)`

---
**jQuery is super powerful but I want you all to understand that it is just an abstraction of the core javascript underneath.**

There will come a time when you will not have jQuery, and when that day comes, fear not!

<http://youmightnotneedjquery.com/>
