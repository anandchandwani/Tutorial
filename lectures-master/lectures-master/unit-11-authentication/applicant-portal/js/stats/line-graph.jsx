var React = require('react');
var _ = require('lodash');
var Chart = require('react-chartist');

var LineGraph = React.createClass({

  countWeeks: function(arrObjects) {
    var counts = _.countBy(arrObjects, obj => {
      return moment(new Date(obj.created_at))
             .startOf('week')
             .toString();
    });
    //default this week to zero if there are none for this week.
    var thisWeek = moment(new Date).startOf('week').toString();
    counts[thisWeek] = counts[thisWeek] || 0;
    return counts;
  },

  countCompletePend: function() {
    var counts = _.countBy(this.props.pendings, obj => {
      return obj.complete && 
             (moment(obj.updated_at).startOf('week').valueOf() === 
             moment(new Date).startOf('week').valueOf());
    });
    return counts.true || 0;
  },

  render: function() {
    if (!this.props.apps.length) return <div />;

    var [apply, jsHard, site] = this.props.google;

    var appCounts = this.countWeeks(this.props.apps);
    var pendCounts = this.countWeeks(this.props.pendings);
    var compPendCounts = this.countCompletePend();
    var userCounts = this.countWeeks(this.props.users);
    var keys = Object.keys(appCounts);
    keys = _.sortBy(keys, key => {
      return new Date(key);
    });
    keys = keys.slice(-6); //we only want to see the past 6 weeks

    var series = [
      _.map(keys, label => appCounts[label]),
      _.map(keys, label => userCounts[label] || 0),
      _.map(keys, label => pendCounts[label] || 0)
    ];
    var labels = keys.map(key => moment(new Date(key)).format('M/DD'));

    var lineChartData = { labels, series };

    var lineChartOptions = { low: 0 };

    var userCountThisWeek = userCounts[keys[keys.length - 1]];
    var pendCountThisWeek = pendCounts[keys[keys.length - 1]];
    var appCountThisWeek = appCounts[keys[keys.length - 1]];

    return (
      <section>
        <h1>Stats</h1>    
        <Chart data={lineChartData}
               options={lineChartOptions}
               type={'Line'} />
        <h3>This week</h3>
        <p className="ct-series-b">
          Accounts created: { userCountThisWeek || 0 }
        </p>
        <p>
          Users did not attempt: { userCountThisWeek - pendCountThisWeek - appCountThisWeek || 0 }
        </p>
        <p className="ct-series-c">
          Attempted (but not submitted): { pendCountThisWeek - compPendCounts || 0 }
        </p>
        <p className="ct-series-c">
          Finished challenge (not submitted): { compPendCounts || 0 }
        </p>
        <p className="ct-series-a">
          Submitted: { appCountThisWeek || 0 }
        </p>
        <h4>
          New visits
        </h4>
        <p className="text-muted">
          To site: { site && getRow(site[0].rows, 'New Visitor') }
        </p>
        <p className="text-muted">
          To apply-login: { apply && getRow(apply[0].rows, 'New Visitor') }
        </p>
        <p className="text-muted">
          To js-hard-parts: { jsHard && getRow(jsHard[0].rows, 'New Visitor') }
        </p>

        <h4>
          Repeat visits
        </h4>
        <p className="text-muted">
          To site: { site && getRow(site[0].rows, 'Returning Visitor') }
        </p>
        <p className="text-muted">
          To apply-login: { apply && getRow(apply[0].rows, 'Returning Visitor') }
        </p>
        <p className="text-muted">
          To js-hard-parts: { jsHard && getRow(jsHard[0].rows, 'Returning Visitor') }
        </p>
      </section>
    );
  }

});

module.exports = LineGraph;

function getRow(rows, key) {
  if (!rows) return 0;
  try {
    return rows.find(arr => arr[0] === key)[1];
  } catch (err) {
    return 0;
  }
}
