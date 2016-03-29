var React = require('react');

var Bar = React.createClass({
  render: function() {
    var percent = Math.round(this.props.num / this.props.total * 100);
    return (
      <div>
        {this.props.text + ': ' + percent + "%"}
        <div className="progress">
          <div className={"progress-bar progress-bar-"+this.props.bootClass} 
               role="progressbar" 
               style={{width: percent + "%"}}>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Bar;