<!-- background: #50b187-->
<!-- color: #fff -->
<!-- font: frutiger -->

# Intro to Angular
***


## Why angular
>Angular is a way to allow for fast highly responsive full featured single page apps

***
```html
<body>
Name: <input id="name" type="text">
Age: <input id="age" type="text">
  <script>
    Person = function(){
      this.name = document.getElementById('name').value;
      this.age = document.getElementById('age').value;
    }
    function logPerson() {
      var person = new Person();
      console.log(person);
    }
    window.setInterval(logPerson,100);
  </script>
</body>
```


***


# Angular isn't doing anything magical, it just abstracts away some of the complexity for us

***

# Angular Basics
* Different Mindset
* Let Data drive your app
* Data is the single source of truth, all changes flow from there
* MVC
* Compilation (looks at the HTML for special words and turns that into html with javascript)
* Runtime ( when things start running)

***

## Compilation
* Looks for directives
* Sets up watchers, creates event listeners based on these directives.


***


# What is a controller?
***
**Chunk of code that explains how the data relates to each other.**

* handler for how the data changes and responds to user actions
* let us manipulate and augment the `$rootScope`
* bind things as properties in a controller and then access them in the view

---


* if angular sees an `ng-controller` directive
* `new` up the constructor functions 
* controllers have their own individual scope
* controllers are reconstructed on every view change

***

# Lets see how that original HTML snippet looks converted to angular 
```html
<body ng-controller="PersonController as ctrl>
Name: <input id="name" ng-model="ctrl.person.name" >
Age: <input id="age" ng-model="ctrl.person.age">
  <script>
    function PersonController() {
      this.person = {};
      function logPerson() {
        console.log(this.person);
      }.bind(this)
      // we would probably want to use angulars $timeout service here though
      $interval(logPerson,100);
    }
  </script>
</body>
```
***
# Why should I care now?

Angular allows us to do more with less code
Angular allows us to do things without generating dynamic HTML and concatenating strings
***
Why should I care later?

