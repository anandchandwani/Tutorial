var React = require('react');
var { Link } = require('react-router');
var Item = require('./item');
var NotFound = require('../utils/not-found');
var Notes = require('./notes');

var Popup = React.createClass({
  render: function() {
    var id = this.props.params.id;
    var obj = this.props.apps.find(obj => obj._id === id);
    var items = [];
    var count = 0;
    
    for (let i in obj) {
      items.push(<Item prop={i} val={obj[i]} key={count++} />);
    }

    if (obj) {
      return (
        <div className="container-fluid">
          <h4 style={{ textAlign: 'right' }}>
            <Link to="apps" params={{ status: obj.status }}>
              { String.fromCharCode(8592) }
              {' '}{ obj.status }
            </Link>
          </h4>
          <ul>{ items }</ul>
          <Notes data={obj} />
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
});

module.exports = Popup;