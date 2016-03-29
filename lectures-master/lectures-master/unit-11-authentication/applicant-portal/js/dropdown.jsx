var React = require('react');
var hoverify = require('./utils/hover-dropdowns.js');

var Dropdown = React.createClass({

  componentDidMount: function() {
    // make dropdown open and close on hover
    var $this = $(this.getDOMNode());
    var toggler = $this.find('.dropdown-toggle');
    var menu = $this.find('.dropdown-menu');
    hoverify(toggler, menu);
  },

  render: function() {
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" 
           data-toggle="dropdown" role="button"
           aria-expanded="false">
          { this.props.label } 
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
        { this.props.children }
        </ul>
      </li>
    );
  }
});

module.exports = Dropdown;