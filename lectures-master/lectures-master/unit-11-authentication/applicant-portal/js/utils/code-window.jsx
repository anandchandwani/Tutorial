var React = require('react');
var Spacer = require('./spacer');

//need a component for this because preserving the indentation is bothersome. It is normally ignores becuase JSX ignores whitespace

var CodeWindow = React.createClass({
  render: function() {
    var codeLines = this.props.code.split('\n');
    var codeNodes = codeLines.map((code, i) => {
      //measure the indentation since JSX ignores the whitespace
      var space = code.match(/^\s*/)[0];
      return (
        <span key={i}>
          <Spacer width={space.length * 10} />
          {code}<br />
        </span>
      );
    });
    return <div> { codeNodes } </div>;
  }
});

module.exports = CodeWindow;