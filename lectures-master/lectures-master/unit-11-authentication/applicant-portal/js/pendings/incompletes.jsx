var React = require('react');
var User = require('../users/user');
var _ = require('lodash');

var Incompletes = React.createClass({

  getInitialState: function() {
    return { days: 7 };
  },

  update: function() {
    var days = React.findDOMNode(this.refs.days).value;
    this.setState({ days });
  },

  render: function() {
    var userNodes = this.props.users
    .filter(user => !user.applications.length)
    .filter(user => new Date(user.created_at) > moment().subtract(this.state.days, 'days'))
    .map((user, i) => <User data={user} key={user._id} i={i} />);

    return (
      <section>
        <h1>Incomplete attempts</h1>
        <div className="form-group">
          <label className="col-md-2 control-label" htmlFor="textinput">In the past</label>  
          <div className="col-md-10">
            <div className="input-group">
              <input id="appendedtext" name="appendedtext" className="form-control" onChange={this.update}
                     placeholder="placeholder" type="number" defaultValue={this.state.days} ref="days" />
              <span className="input-group-addon">days</span>
            </div>
          </div>
        </div>
        <p className="clear">
          <span style={{ color: '#ccc'}}>Registered but no attempt</span><br />
          <span style={{ color: '#3498DB'}}>Attempt made (no submission)</span>
        </p>
        <div className="clearfix">
        { userNodes }
        </div>
      </section>
    );
  }
});

module.exports = Incompletes;