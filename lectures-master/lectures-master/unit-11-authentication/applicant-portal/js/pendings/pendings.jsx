var React = require('react');
var Pending = require('./pending');
var _ = require('lodash');

var Pendings = React.createClass({

  getInitialState: function() {
    return { days: 7 };
  },

  update: function() {
    var days = React.findDOMNode(this.refs.days).value;
    this.setState({ days });
  },

  render: function() {
    var pendingNodes = this.props.pendings.map((pending, i) => {
      return <Pending data={pending} key={pending._id} 
                      index={i} />;
    });

    return (
      <section>
        <h1>Pending attempts</h1>
        <ul className="list-group"> { pendingNodes } </ul>
      </section>
    );
  }
});

module.exports = Pendings;