var React = require('react');
var { $put } = require('../utils/ajax');
var Actions = require('../actions');

var AssignCohort = React.createClass({

  assign: function() {
    var val = +React.findDOMNode(this.refs.cohort).value;
    var valid = new Set([4, 5, 6, 7]);
    if (!valid.has(val)) return alert('invalid cohort');
    var id = this.props.data._id;
    var status = 'cohort' + val;
    $put(`/apps/${id}`, { status }).success(data => {
      Actions.update(id, 'apps', { status });
    });
  },

  render: function() {
    return (
      <li>
        <form id="assign-cohort">
          <div className="input-group cohort-picker">
            <input type="text" ref="cohort" className="form-control" 
                   placeholder="cohort" />
            <span onClick={this.assign} className="input-group-addon glyphicon glyphicon-user" />
          </div>
        </form>
      </li>
    );
  }
});

module.exports = AssignCohort;
