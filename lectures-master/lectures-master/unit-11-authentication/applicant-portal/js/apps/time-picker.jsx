var React = require('react');
var { $put } = require('../utils/ajax');
var Actions = require('../actions');
var DateTimeField = require('../../react-bootstrap-datetimepicker');

var TimePicker = React.createClass({

  setTime: function(time) {
    var interview = new Date(+time);
    var id = this.props.data._id;
    $put(`/apps/${id}`, { interview }).success(data => {
      Actions.update(id, 'apps', { interview });
    });
  },

  render: function() {
    var props = {
      onChange: this.setTime,
      inputFormat: ' ',
      showToday: true,
    };
    if (this.props.data.interview) {
      props.dateTime = moment(new Date(this.props.data.interview));
      props.inputFormat = 'MM/DD/YYYY hh:mm A';
    }

    return (
      <div className="clear col-xs-offset-2">
        <label>Interview time</label>
        <DateTimeField { ...props} />
      </div>
    );
  }

});

module.exports = TimePicker;