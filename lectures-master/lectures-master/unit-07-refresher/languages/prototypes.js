var helpers = {
  render: function() {
    this.node.css({
      top: this.y * 50 + 8,
      left: this.x * 50 + 8
    });
  },

  overlap: function(obj) {
    return this.x === obj.x && this.y === obj.y;
  }
}


function Head($el) {
  this.node = $('<div id="head"></div>');
  this.currentDirection = 'right';
  this.SPEED = 100;
  this.x = this.y = 0;
  $el.append(this.node);
  this.render();
  setTimeout(this.move.bind(this), this.SPEED);
}

Head.prototype.isOutside = function() {
  return this.x < 0 ||
         this.x > 13 ||
         this.y < 0 ||
         this.y > 13;
}

Head.prototype.kill = function() {
  alert('you died');
  location.reload();
}

function Apple($el) {
  this.node = $('<img id="apple"></img>');
  this.node.attr('src', 'src/assets/apple.jpg');
  this.x = Math.floor(Math.random() * 14);
  this.y = Math.floor(Math.random() * 14);
  $el.append(this.node);
  this.render();
}


Apple.prototype.checkIfEaten = function() {
  if (this.overlap(head)) this.pick();
}

Apple.prototype.pick = function() {
  this.node.remove();
  head.apple = new Apple(board);
}



Apple.prototype.__proto__ = helpers;
Head.prototype.__proto__ = helpers;




class Shape {

  render() {
    this.node.css({
      top: this.y * 50 + 8,
      left: this.x * 50 + 8
    });
  }

  overlap(obj) {
    return this.x === obj.x && this.y === obj.y;
  }
}

class Head extends Shape {
  constructor() {
    this.node = $('<div id="head"></div>');
    this.currentDirection = 'right';
    this.SPEED = 100;
    this.x = this.y = 0;
    $el.append(this.node);
    this.render();
    setTimeout(this.move.bind(this), this.SPEED);
  }

  isOutside() {
    return this.x < 0 ||
           this.x > 13 ||
           this.y < 0 ||
           this.y > 13;
  }

  kill() {
    alert('you died');
    location.reload();
  }
}

class Apple extends Shape {
  ...
  ...
}