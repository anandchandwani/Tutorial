<!-- background: #50b187-->
<!-- color: #fff -->
<!-- font: frutiger -->

# Angular Services and Directives
***

# What is a Service
***

# Services are singletons
Unlike controllers, which are instantiated and destroyed as the views they are attached come into and out of view, services are created once (singletons) and persist for the life of the application.
***


# Services provide a way to group together chunks of code
Provide a way to organize related code and data that can be shared by controllers and even other services.
***

# Services should be used to hold the bulk of your application's logic and data, thus keeping controllers focused on what they are responsible for

***

# What is a directive

***
# Directives are in html
Directives are markers in html. Most commonly either attributes or custom element tags.

Ex:

```html
<my-directive></my-directive>

// or

<div my-directive="hello"></div>
```

***
# Directives are Compiled
when processed by Angular's HTML compiler they are transformed and different behaviors are attached

Angular's HTML compiler traverses the DOM looking for certain attributes, collects all the directives and links them to the scope model.

***

```

var html = '<div ng-bind="exp"></div>';

// Step 1: parse HTML into DOM element
var template = angular.element(html);

// Step 2: compile the template
var linkFn = $compile(template);

// Step 3: link the compiled template with the scope.
var element = linkFn(scope);

// Step 4: Append to DOM (optional)
parent.appendChild(element);
```

***
# Note on services and directives

a diriective like `ngDirective` would be used in html as `ng-directive`

Angular usually uses the dollar sign `$` + name to refer to built in services.

***

We can build our own services and directives but the key takeaway that I want you all to understand is how angular works behind the scenes, looks through an html document parses and compiles it.

Once you understand all the rest of the pieces fall into place.
***

# Built in services/ directives

Angular has a ton of built in services/directives, that we can use.

Check out their docs for more info,
* ngRepeat
* $http
