var React = require('react');
var SrcBars = require('./src-bars');
var RateBars = require('./rate-bars');
var LineGraph = require('./line-graph');

var Stats = React.createClass({
  render: function() {
    return (
      <div>
        <SrcBars apps={this.props.apps} />
        <RateBars apps={this.props.apps} />
      </div>
    );
  }
});

module.exports = Stats;