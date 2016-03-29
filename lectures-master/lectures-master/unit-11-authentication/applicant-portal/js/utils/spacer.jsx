var React = require('react');

var Spacer = React.createClass({
  render: function() {
    return <span style={{ width: this.props.width + 'px', display: 'inline-block' }} />;
  }
});

module.exports = Spacer;