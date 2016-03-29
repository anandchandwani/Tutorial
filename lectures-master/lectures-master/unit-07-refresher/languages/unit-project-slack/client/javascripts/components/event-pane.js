var React = require('react');
var moment = require('moment');

var EventPane = React.createClass({

  componentDidUpdate: function() {
    setTimeout(function() {
      $('li.event').addClass('flipInX animated');
    }, 0);
  },

  componentWillUpdate: function() {
    $('li.event').removeClass('flipInX animated');
  },

  render: function() {
    var data = this.props.data;
    var className = 'flipInX animated event';
    if (data.summary.match(/lecture/i)) {
      className += ' lecture';
    } else if (data.summary.match(/assessment/i)) {
      className += ' assessment';
    }
    return (
      <li className={className}>
        <a href={data.htmlLink}>
          <span className="mail-sender">{data.summary}</span>
          <span className="mail-subject"></span>
          <span className="mail-message-preview">
            {moment(data.start.dateTime).format('hh:mm a')}
          </span>
          <span className="mail-message-preview">
            {moment(data.end.dateTime).format('hh:mm a')}
          </span>
        </a>
      </li>
    );
  }
});

module.exports = EventPane;
