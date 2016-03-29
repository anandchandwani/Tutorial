var React = require('react');
var Bar = require('./bar');
var _ = require('lodash');

var Bars = React.createClass({
  render: function() {
    var total = 0;
    var refers = new Set(['quora', 'js-the-hard-parts', 'acquaintance', 'coderbyte', 'coursereport', 'meetup']);
    var others = [];
    var counts = _.countBy(this.props.apps, app => {
      total++;
      if (!app.refer) return 'js-the-hard-parts';
      if (!refers.has(app.refer)) {
        others.push(app.refer);
        return 'other';
      }
      return app.refer;
    });

    var barNodes = [];
    for (let i in counts) {
      barNodes.push(<Bar text={i} num={counts[i]}
                         total={total} key={i}
                         bootClass="info" />);
    }

    var otherList = others.map(refer => <li className="list-group-item">{refer}</li>);
    return (
      <div>
        <h1>Sources</h1>
        <div className="panel panel-info">
          <div className="panel-body">
            { barNodes }
            <h3> Others </h3>
            <ul className="list-group">
              { otherList }
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Bars;