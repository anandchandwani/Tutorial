var React = require('react');
var User = require('./user');

var Users = React.createClass({
  render: function() {
    var userNodes = this.props.users.map((user, i) => {
      return <User data={user} key={user._id} i={i} />;
    });

    return (
      <section>
        <h1> Users </h1>
        <p>
          <span style={{ color: '#ccc'}}>Registered but no attempt</span><br />
          <span style={{ color: '#3498DB'}}>Attempt made (no submission)</span><br />
          <span style={{ color: '#2C3E50'}}>Submitted application</span>
        </p>
        { userNodes }
      </section>
    );
  }
});

module.exports = Users;