var React = require('react');
var { $put } = require('../utils/ajax');
var Actions = require('../actions');

var Notes = React.createClass({

  getInitialState: function() {
    return { edit: false };  
  },

  save: function() {
    var notes = React.findDOMNode(this.refs.notes).value.trim();
    var id = this.props.data._id;
    $put(`/apps/${id}`, { notes }).success(data => {
      Actions.update(id, 'apps', { notes });
    });
  },

  toggleEdit: function(e) {
    e.preventDefault();
    if (this.state.edit) this.save();
    this.setState(oldState => ({ edit: !oldState.edit }));
  },

  render: function() {
    var icon = (this.state.edit ? 'save' : 'pencil');
    var notes;
    if (this.state.edit)
      notes = (
        <textarea className="form-control" rows="3" ref="notes"
                  placeholder="enter notes here... save by clicking the arrow icon" 
                  defaultValue={this.props.data.notes} />
      );
    else 
      notes = this.props.data.notes || '';

    return(
      <section id="notes">
        <h4> Notes: </h4>
        <a href="" onClick={this.toggleEdit}>
          <span className={'glyphicon glyphicon-' + icon} />
        </a>
        { notes }
      </section>
    );
  }
});

module.exports = Notes;