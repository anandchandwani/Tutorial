var React = require('react');
var Bar = require('./bar');
var _ = require('lodash');

var RateBars = React.createClass({
  render: function() {
    var { accept, reject } = _.reduce(this.props.apps, (acc, obj) => {
      acc[obj.status]++;
      acc.reject += (obj.attempts || 0);
      return acc;
    }, { accept: 0, reject: 0 });

    var total = accept + reject;
    return (
      <div>
        <h1> Acceptance Rates </h1>
        <div className="panel panel-default">
          <div className="panel-body">
            <Bar text="accept" num={accept}
                 total={total} bootClass="success" />
            <Bar text="reject" num={reject}
                 total={total} bootClass="danger" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RateBars;