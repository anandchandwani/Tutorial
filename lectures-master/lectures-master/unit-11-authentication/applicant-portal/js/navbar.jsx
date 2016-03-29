var React = require('react');
var { Link } = require('react-router');
var Dropdown = require('./dropdown');
var _ = require('lodash');

var Navbar = React.createClass({

  render: function() {
    var counts = _.countBy(this.props.apps, obj => {
      return (obj.archive ? 'archive' : obj.status);
    });
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#collapse-1"
                    aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src="img/blue-screen-square.svg" alt="logo" id="logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="collapse-1">
            <ul className="nav navbar-nav navbar-right">

              <li><Link to="incompletes">Incomplete</Link></li>
              <li><Link to="apps" params={{ status: 'applied' }}>Applied { counts.applied ? `(${counts.applied})` : '' }</Link></li>
              <li><Link to="apps" params={{ status: 'culture' }}>Culture { counts.culture ? `(${counts.culture})` : '' }</Link></li>
              <li><Link to="apps" params={{ status: 'emailed' }}>Emailed { counts.emailed ? `(${counts.emailed})` : '' }</Link></li>
              <li><Link to="apps" params={{ status: 'booked' }}>Booked { counts.booked ? `(${counts.booked})` : '' }</Link></li>
              <li><Link to="apps" params={{ status: 'later' }}>Later { counts.later ? `(${counts.later})` : '' }</Link></li>
              <li><Link to="apps" params={{ status: 'accept' }}>Accept { counts.accept ? `(${counts.accept})` : '' }</Link></li>
              
              <Dropdown label="Cohort">
                <li><Link to="apps" params={{ status: 'cohort4' }}>4 (Nov 30) { counts.cohort4 }</Link></li>
                <li><Link to="apps" params={{ status: 'cohort5' }}>5 (Jan 18) { counts.cohort5 } </Link></li>
                <li><Link to="apps" params={{ status: 'cohort6' }}>6 (Mar 14) { counts.cohort6 } </Link></li>
                <li><Link to="apps" params={{ status: 'cohort7' }}>7 (???) { counts.cohort7 } </Link></li>
              </Dropdown>

              <Dropdown label="Other">
                <li><Link to="archive">Archive</Link></li>
                <li><Link to="stats">Analysis</Link></li>
                <li><Link to="users">Users</Link></li>
                <li><Link to="pendings">Pendings</Link></li>
                <li><Link to="search">Search</Link></li>
                <li><a href="/logout">Log Out</a></li>
              </Dropdown>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;

