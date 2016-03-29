var React = require('react');
var _ = require('lodash');
var moment = require('moment');
var DayStrip = require('./day-strip');

var CalendarWindow = React.createClass({

  getInitialState: function() {
    return { weeks: [[]], show: 0 };
  },

  animate: function() {
    $(document).on('mouseenter', 'li.animated', function(e) {
      $(this).removeClass('flipInX');
      $(this).addClass('rubberBand');
    });
    $(document).on('mouseleave', 'li.animated', function(e) {
      $(this).removeClass('rubberBand');
    });
  },

  downWeek: function() {
    this.setState(function(prevState) {
      return { show: prevState.show - 1 };
    });
  },

  upWeek: function() {
    this.setState(function(prevState) {
      return { show: prevState.show + 1 };
    });
  },

  componentDidMount: function() {
    var that = this;
    this.animate();
    $.ajax({
      url: this.props.url,
    }).done(function(data) {
      var dates = Object.keys(data).map(date => moment(new Date(date)));
      var activeDay = _.min(dates).startOf('week');
      var weeks = [];
      var indexForThisWeek;

      while (!_.isEmpty(data)) {
        var week = [];
        for (var i = 0; i < 7; i++) {
          var day = activeDay.format('MMM DD YYYY');
          if (i !== 0) week.push(data[day]);
          delete data[day];
          if (day === moment().format('MMM DD YYYY'))
            indexForThisWeek = weeks.length;               //need to know which week is THIS week. That will be shown first
          activeDay.add(1, 'days');
        }
        weeks.push(week);
      }

      that.setState({
        weeks: weeks,
        show: indexForThisWeek
      });
    });
  },

  render: function() {
    var dayNodes = this.state.weeks[this.state.show].map(function(day, i) {
      if (day)
        return <DayStrip data={day} key={i} />;
      else
        return <div className="col-sm-2" key={i} />;
    });
    return (
      <div className="col-sm-10 col-sm-offset-2">
        <div>
          <span className="glyphicon glyphicon-arrow-left" onClick={this.downWeek} />
          <span>...</span>
          <span className="glyphicon glyphicon-arrow-right" onClick={this.upWeek} />
        </div>
        {dayNodes}
      </div>
    );
  }
});

module.exports = CalendarWindow;
