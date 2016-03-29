var React = require('react');
var Person = require('./person');

var Archive = React.createClass({
  render: function() {
    var appNodes = this.props.apps
                   .filter(app => app.archive)
                   .map(app => <Person data={app} key={app._id} />);
    return (
      <main>
        <h1>Archive</h1>
        { appNodes }
      </main>
    );
  }
});

module.exports = Archive;