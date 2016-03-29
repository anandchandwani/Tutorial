var React = require('react');
var { Link } = require('react-router');

var Item = React.createClass({
  render: function() {
    var prop = this.props.prop;
    var val = this.props.val;

    if (prop === '_user') {
      return (
        <li className="list-group-item">
          <strong> { prop }: </strong>
          <Link to="user" params={{ id: val._id }}>
            { val.email }
          </Link>
        </li>
      );
    }

    if (prop === 'applications') {
      var links = val.map(id => <Link to="app" params={{ id }}>{ id }</Link>);
      return (
        <li className="list-group-item apps">
          <strong> { prop }: </strong>
          { links }
        </li>
      );
    }

    if (prop === 'notes') return <template />;

    if (typeof val === 'object')
      val = JSON.stringify(this.props.val, null, 4);
    else if (prop === 'created_at' || prop === 'updated_at' || prop === 'interview')
      val = moment(new Date(val)).format('ddd, MMM DD - hh:mm a');
    else 
      val = String(val);
    // var urlRegexp = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/g
    // val = val.replace(urlRegexp, '<a href="$1" target="_blank">$1</a>');
    return (
      <li className="list-group-item">
        <strong> {prop}: </strong>
        {{val}}
      </li>
    );
  }
});

module.exports = Item;