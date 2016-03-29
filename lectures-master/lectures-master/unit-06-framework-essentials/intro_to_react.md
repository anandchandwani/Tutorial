#Intro to React

Why react?

Take a look at this page that I've set up its a super simple example, its just 10,000 numbers on a page that I add one to a certain amount of random boxes every time I click a button.

This is the thing that computers are supposed to be really good at right, all we're doing is adding +1 to a bunch of divs.

I have 11000 divs in this page which may seem like a lot but you could easily have 10,000 elements in a page.

So why is this so slow?

DOM manipulation is hard!

Anytime you manipulate or change the DOM the page has to redraw, the browser has no idea if we're only changing a single value, a single style tag or something, it completely redraws the page!

The other problem is duplication, I shouldnt have to write `div` 10000 times to do this.

Solution!
I'm going to talk about why react came about and how it handles these two issues.
Lets start with the first one, ReactJS is a javascript library that relies on something called the **Virtual DOM** to manage this.

Javascript is fast right, assigning a value to a property in an object is super fast, assigning that same value to an element in the DOM is super slow. The people over at FB had the idea to maintain a copy of the DOM in javascript and call it the virtual DOM. 

Whenever you want to make changes to the DOM in react, you makes Changes to the virtual DOM and react compares the virtual DOM with the real one! it finds the differences and only updates those parts.


As for repetition, in ReactJS we just use components

These are reusable chunks of HTML that we can use over and over again.

I can render these chunks just one time, or I can loop through and render them ten or twenty times.

Its a great way to break down your UI into set pieces and regenerate those dynamically. Remember, the whole thing about the virtual DOM?

Lets take a look at this page written in react here <http://www.emergent.info/>
How would we break this up into individual components?

We create a component by calling `React.createClass`, each component needs a `render` method which is what react calls when it displays it. This render method can return HTML or just return another react component

>sidenote: these examples are written in jsx, its an xml-y javascript that converts to js when you want it to. the react docs on fb for more info

Ex:
```
var ParentComponent = React.createClass({
  render: function() {
    return (
      <h1>I'm a parent</h1>
    );
  }
});
// then we render it on a certain domnode (like a document.getElementById('main') )
React.render(
  <ParentComponent />,
  domnode
);
```
These components can call other components and so on and so forth.

So the question is now, how do we pass data between these components?
React has a **one way** data flow, which means data only flows from the parent to the child. 
This data is immutable! The child cannot change it!

It is accessed in the child component as `this.props`

Ex:
```
var ParentComponent = React.createClass({
  render: function() {
    return (
     <ChildComponent foo="bar" />
    );
  }
});
```

Then we can access those properties like this
```
var ChildComponent = React.createClass({
  render: function() {
    return (
      <div>{this.props.foo}</div>
    );
  }
});
```
**Notice the use of single curly braces, not double**

Props are immutable though!


If we need something that will change, like maybe a click action or something, we change state!

Minimize state when you're building react apps, it has to watch and monitor any and all changes to state and react accordingly, with props it just needs to pass them along.

We change state by using `this.setState` in a function

Ex:
```
var ChildComponent = React.createClass({
  wakeUp: function() {
    this.setState({ awake: true });
  },
  render: function() {
    return (
      <input type='checkbox' checked={this.state.awake} />
    );
  }
});
```

We can also convert state to props by passing it into a component


But wait, doesnt data flow up in the real world? Say we want different things to show in the `ParentComponent` depending on whether or not our box is checked

We do this by passing in **handlers** that respond to certain actions.
Ex:

```
// ParentComponent render
React.createClass({
  getInitalState: function() {
    return({textBox: ''});
  },
  handleChange: function() {
    this.setState({ textBox: 'filled'});
  },
  render: function() {
    <ChildComponent whatever={this.state.textBox} onChangeHandler={this.handleChange} />
  }
});

// ChildComponent 

var ChildComponent = React.createClass({
  changeStuff: function() {
    // ....
    var textBoxValue this.refs['input'].getDOMnode.value
    // do something with this value, or pass it in to the handler
    this.props.onChangeHandler();
  },
  render: function() {
    return( <input type="text" ref='input' value={this.props.whatever} onClick={this.changeStuff} >);
  }
});
```

See how the handler is passed down and then called?
** Events flow up, data flows down**

The onChange event calls a function, which calls a function on the parent component. This function can then change the data and it comes back down.

This naturally leads to grouping your ui into the parts that affect each other and splitting it up from the parts that don't

This kinda sounds like the DOM right, when you click something, the event goes up through the different nodes, changes something which cascades back down when the page re renders.

React does this in the Virtual DOM though.


###Back to the DOM
It is:
* inconsistent
* its slow and hard to test
* its expensive

###The Virtual DOM 
it is:
* loaded in-memory!
* render() is called when something changes
* React does a diff against the real DOM and applyes changes

###Accessing the real DOM
React gives a bunch of methods to access the real dom within our components, these are called **lifecycle** methods most of them are self explanitory

* componentDidMount
* componentWillMount
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate
* componentDidUpdate
* componentWillUnmount

We can also access DOMnode values by calling `this.getDOMNode()` within any component. This way you can access values using regular vanilla javascript


This takes care of the whole problem of declarative templates, i.e. how can u set the height and width of an element when you have no idea how large it will be? Say you're using ng-repeat on some external data or something

###Why this is awesome
* this one way data flow keeps complexity under control.
* web components are the future and this is right there
* easy to debug self contained components
* the library is small, it doesn't force you to do anything crazy
* the future is super bright!
