var React = require('react');
var Actions = require('../actions.js');
var hoverify = require('../utils/hover-dropdowns');
var { $put } = require('../utils/ajax');
var AssignCohort = require('./assign-cohort');

var SmartButton = React.createClass({

  componentDidMount: function() {
    // make dropdown open and close on hover
    var $this = $(this.getDOMNode());
    var toggler = $this.find('.dropdown-toggle');
    var menu = $this.find('.dropdown-menu');
    var stayOpenIfThisIsFocused = $this.find('.cohort-picker input');
    hoverify(toggler, menu, stayOpenIfThisIsFocused);
  },
  
  update: function(e) {
    e.preventDefault()
    var id = this.props.data._id;
    var status = $(e.target).data('status');
    $put(`/apps/${id}`, { status }).success(data => {
      Actions.update(id, 'apps', { status });
    });
  },

  reject: function(e) {
    e.preventDefault();
    var id = this.props.data._id;
    var updates = { status: 'reject', archive: true };
    $put(`/apps/${id}`, updates).success(data => {
      Actions.update(id, 'apps', updates);
    });
  },

  softReject: function(e) {
    e.preventDefault();
    var id = this.props.data._id;
    var attempts = ++this.props.data.attempts || 1;
    var updates = { attempts, status: 'applied' };
    $put(`apps/${id}`, updates).success(data => {
      Actions.update(id, 'apps', updates);
    });
  },

  render: function() {
    var obj = this.props.data;
    return (
      <div className="btn-group btn-block">
        <button className="btn btn-default btn-sm dropdown-toggle" 
                type="button" data-toggle="dropdown"
                aria-expanded="false">
          { obj.status }{' '} 
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#" onClick={this.update} data-status="applied">Applied</a></li>
          <li><a href="#" onClick={this.update} data-status="culture">Culture</a></li>
          <li><a href="#" onClick={this.update} data-status="emailed">Emailed</a></li>
          <li><a href="#" onClick={this.update} data-status="booked">Booked</a></li>
          <li><a href="#" onClick={this.update} data-status="later">Contact later</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#" onClick={this.update} data-status="accept">Accept</a></li>
          <li><a href="#" onClick={this.reject} data-status="reject">Reject</a></li>
          <li><a href="#" onClick={this.softReject} className="soft">Soft Reject</a></li>
          <li role="separator" className="divider"></li>
          <AssignCohort data={this.props.data} />
          <br />
        </ul>
      </div>
    );
  }
});

module.exports = SmartButton;