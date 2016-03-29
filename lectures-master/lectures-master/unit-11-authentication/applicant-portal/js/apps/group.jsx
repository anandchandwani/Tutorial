var React = require('react');
var Person = require('./person');

var Group = React.createClass({
  render: function() {
    var data = this.props.apps || [];
    var appNodes = data.map(app => {
      return <Person data={app} key={app._id} />;
    });
    return <div className="row"> {appNodes} </div>;
  }
});

module.exports = Group;