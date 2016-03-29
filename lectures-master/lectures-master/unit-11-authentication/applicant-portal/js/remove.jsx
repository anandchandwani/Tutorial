var React = require('react');

var Remove = React.createClass({

  componentDidMount: function() {
    $(React.findDOMNode(this)).confirmation({
      onConfirm: e => {
        e.preventDefault();
        this.props.remove(this.props.id);
      }
    });
  },

  render: function() {
    return (
      <a href="" className="delete">
        <span className="glyphicon glyphicon-trash" />
        {' '}Delete
      </a>
    );
  }
});

module.exports = Remove;