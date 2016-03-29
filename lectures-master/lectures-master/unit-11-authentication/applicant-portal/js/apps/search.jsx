var React = require('react');
var Spacer = require('../utils/spacer');
var Person = require('./person');

var Search = React.createClass({

  getInitialState: function() {
    return { apps: [] };
  },

  search: function(e) {
    e.preventDefault();
    var name = e.target.name.value;
    if (!name) return;
    var regex = new RegExp(name, 'i');
    var matches = this.props.apps.filter(app => {
      if (app.info[0] && app.info[0].match(regex)) return true;
      if (app.fullName && app.fullName.match(regex)) return true;
      if (app._user && app._user.name && app._user.name.match(regex)) return true;
      if (app._user && app._user.github_login && app._user.github_login.match(regex)) return true;
    });
    this.setState({ apps: matches });
  },

  render: function() {

    var appNodes = this.state.apps.map(app => <Person data={app} key={app._id} />);
    return (
      <section>
        <h1> Search </h1>
        <form className="form-inline" onSubmit={this.search}>
          <div className="form-group">
            <label htmlFor="exampleInputName2">Name</label>
            <Spacer width="20" />
            <input type="text" className="form-control" name="name"
                   id="exampleInputName2" placeholder="or github handle" />
          </div>
          <button type="submit" className="btn btn-default">
            <span className="glyphicon glyphicon-search" />
          </button>
        </form><br />
        { appNodes }
      </section>
    );
  }
});

module.exports = Search;