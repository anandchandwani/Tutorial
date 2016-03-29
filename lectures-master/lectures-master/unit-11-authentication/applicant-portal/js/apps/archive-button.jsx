var React = require('react');
var Actions = require('../actions.js');
var { $put } = require('../utils/ajax');

var Archive = React.createClass({

  archive: function(e) {
    e.preventDefault();
    var id = this.props.data._id;
    var archive = !this.props.data.archive;
    $put(`/apps/${id}`, { archive }).success(data => {
      Actions.update(id, 'apps', { archive });
    });
  },

  componentDidMount: function() {
    $(React.findDOMNode(this)).confirmation({
      onConfirm: this.archive,
      btnOkLabel: 'Confirm'
    });
  },

  render: function() {
    return (
      <a href="#" className="archive">
        <span className="glyphicon glyphicon-floppy-disk" />
        {' '}{ this.props.data.archive ? 'Unarchive' : 'Archive' }
      </a>
    );
  }
});

module.exports = Archive;