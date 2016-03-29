var React = require('react');
var Person = require('./person');

var urgencyFuncs = {
  emailed: app => {
    var updated = moment(app.updated_at);
    if (app.attempts) {
      return updated.add(7, 'days') < moment();
    } else {
      return updated.add(3, 'days') < moment();
    }
  },
  booked: app => {
    var interview = moment(app.interview);
    return interview < moment();
  },
  accept: app => {
    var updated = moment(app.updated_at);
    return updated.add(7, 'days') < moment();
  },
};

var Apps = React.createClass({

  render: function() {
    var status = this.props.params.status || 'applied';
    var apps = this.props.apps
                   .filter(app => app.status === status && !app.archive)
                   
    var urgent, relax;
    if (urgencyFuncs[status]) {
      urgent = [];
      relax = [];
      apps.forEach(app => {
        if (urgencyFuncs[status](app)) urgent.push(app);
        else relax.push(app);
      });
      urgent = urgent.map(app => <Person data={app} key={app._id} />);
      relax = relax.map(app => <Person data={app} key={app._id} />);
    }
    apps = apps.map(app => <Person data={app} key={app._id} />);
    return (
      <main>
        <h1>Applicants</h1>
        <div className="clearfix">{ urgent }</div>
        <hr />
        <div className="clearfix">{ relax || apps }</div>
      </main>
    );
  }
});

module.exports = Apps;