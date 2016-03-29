var React = require('react');
var moment = require('moment');
var EventPane = require('./event-pane');

var DayStrip = React.createClass({
  render: function() {
    var day = moment(this.props.data[0].start.dateTime).format('MMM DD ddd');

    var eventNodes = this.props.data.map(function(event, i) {
      return <EventPane data={event} key={i} />;
    });

    return (
      <div className="tab-pane" id="inbox">
        <div className="content-container clearfix col-sm-2">
          <h1 className="content-title">{day}</h1>
          <ul className="mail-list">
            {eventNodes}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = DayStrip;
