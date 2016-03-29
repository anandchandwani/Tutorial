var React = require('react');
var Router = require('react-router');
var { Route,
      DefaultRoute,
      NotFoundRoute,
      RouteHandler } = Router;
var Navbar = require('./navbar');
var Apps = require('./apps/apps');
var Archive = require('./apps/archive');
var AppPopup = require('./apps/popup');
var UserPopup = require('./users/popup');
var Incompletes = require('./pendings/incompletes');
var Pendings = require('./pendings/pendings');
var Users = require('./users/users');
var Stats = require('./stats/stats');
var Store = require('./store');
var NotFound = require('./utils/not-found');
var LineGraph = require('./stats/line-graph');
var Search = require('./apps/search');
window.moment = require('moment-timezone');


var Main = React.createClass({

  componentDidMount: function() {
    $.get('/apps').then(apps => {
      Store.state = { apps };
      $('#loading').remove();
    });
    $.get('/pendings').then(pendings => Store.state = { pendings });
    $.get('/users').then(users => Store.state = { users });
  },

  getInitialState: function() {
    return Store.state;
  },

  componentWillMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnount: function() {
    Store.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(Store.state);
  },

  render: function() {
    return (
      <div style={{ marginBottom: '400px' }}>
        <Navbar { ...this.state } />

        <div id="loading" className="container">
          <button className="btn btn-lg btn-primary m-progress">Button</button>
          {' '}loading...
        </div>

        <div className="container-fluid">
          <div className="col-sm-4">
            <LineGraph { ...this.state } />
          </div>
          <div className="col-sm-8">
            <RouteHandler { ...this.state } />
          </div>
        </div>

      </div>
    );
  }
});


var routes = (
  <Route handler={Main}>
    <DefaultRoute name="home" handler={Apps} />
    <Route name="apps" path="apps/:status" handler={Apps} />
    <Route name="app" path="app/:id" handler={AppPopup} />
    <Route name="archive" handler={Archive} />
    <Route name="stats" handler={Stats} />
    <Route name="incompletes" handler={Incompletes} />
    <Route name="pendings" handler={Pendings} />
    <Route name="users" handler={Users} />
    <Route name="user" path="user/:id" handler={UserPopup} />
    <Route name="search" path="search" handler={Search} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});

