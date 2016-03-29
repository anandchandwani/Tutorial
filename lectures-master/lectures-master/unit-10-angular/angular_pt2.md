#Digest Loop

---
#The digest looop answers the question
##what does a controller watch?

---
##Normal browser flow
  * event fires
  * JS creates an event object
  * executes any and all functions listening, in order

---
##$digest() cycle
  * processes watchers in its current scope
  * and evaluates them asynchronously
  * until stabilization, i.e. `$watch` detects no changes
  * if not stabilized within 10 cycles

***

```
$rootScope.myModel = 0;
$rootScope.watch('myModel', function(oldValue, newValue) {
  // execute code that updates your models
});
```

***
# Hello World Example
***

1. During the compilation phase:
  * the ng-model and input directive set up a keydown listener on the <input> control.
  * the interpolation sets up a $watch to be notified of name changes.

***

2. During the runtime phase:
  * Pressing an 'X' key causes the browser to emit a keydown event on the input control.
  * The input directive captures the change to the input's value and calls $apply("name = 'X';") to update the application model inside the Angular execution context.
  * Angular applies the name = 'X'; to the model.
  * The $digest loop begins

---

  * The $watch list detects a change on the name property and notifies the interpolation, which in turn updates the DOM.

  * Angular exits the execution context, which in turn exits the keydown event and with it the JavaScript execution context.
  * The browser re-renders the view with update text.

