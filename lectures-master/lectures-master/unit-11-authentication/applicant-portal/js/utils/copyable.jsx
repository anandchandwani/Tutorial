var React = require('react');

var Copyable = React.createClass({

  // copies the email to clipboard when the copy icon is clicked
  componentDidMount: function() {
    $('.glyphicon-copy').off('click');
    $('.glyphicon-copy').on('click', e => {
      e.preventDefault();
      var $this = $(React.findDOMNode(e.target));
      var target = $this.parents('span').find('.target');
      copyInnerText(target[0]);
    });
  },

  render: function() {
    return (
      <span>
        <span className="target">{ this.props.children }</span> 
        <a href="#"><span className="glyphicon glyphicon-copy" /></a>
      </span>
    );
  }

});

module.exports = Copyable;

function copyInnerText(element) {
  var selection = window.getSelection();       
  var range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
};