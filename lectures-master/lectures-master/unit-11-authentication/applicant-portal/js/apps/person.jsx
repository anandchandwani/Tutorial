var React = require('react');
var { Link } = require('react-router');
var moment = require('moment-timezone');
var Remove = require('../remove');
var ArchiveButton = require('./archive-button');
var SmartButton = require('./smart-button');
var TimePicker = require('./time-picker');
var Spacer = require('../utils/spacer');
var { $delete } = require('../utils/ajax');
var Actions = require('../actions.js');
var Copyable = require('../utils/copyable');

var Person = React.createClass({

  remove: function(id) {
    $delete('/apps/' + id).success(() => {
      Actions.remove('apps', id);
    });
  },

  render: function() {
    var obj = this.props.data;
    var panelClass = (obj.attempts ? 'warning' : 'default');
    if (obj.status.match(/accept|cohort/))
      panelClass = 'success';
    if (obj.status === 'reject')
      panelClass = 'danger';

    var email;
    try {
      email = <Link to="user" params={{ id: obj._user._id }}>{ obj._user.email }</Link>;
    } catch(err) {
      email = obj.info[1] || obj.contactInfo[1];
    }

    var img;
    if (obj._user) {
      if (obj._user.pic_url)
        img = <img className="img-fill" src={obj._user.pic_url} />;
      else
        img = <img className="img-fill" src="img/default-pic.svg" /> 
    } else {
      img = <img className="img-fill" src="img/default-pic.svg" /> 
    }
    
    return (
      <div className={"candidate panel panel-" + panelClass}>
        <div className="panel-body">
          <div className="col-xs-2">
            { img }
          </div>
          <ul className="list-group col-xs-6">
            <li>
              <Link to="app" params={{ id: obj._id }} className="name">
                { obj.fullName || obj.info[0] || (obj._user && obj._user.name) }
              </Link>
            </li>
            <li><strong>email:</strong> <Copyable>{ email }</Copyable></li>
            <li><strong>refer:</strong> { obj.refer && obj.refer.slice(0, 40) || 'js-hard-parts'}</li>
            
            <li><SmartButton data={obj} /></li>
          </ul>
          <ul className="list-group col-xs-4">
            <li><strong>created:</strong> { (moment(new Date(obj.created_at))).format('ddd, MMM DD - hh:mm a') }</li>
            <li><strong>updated:</strong> { (moment(new Date(obj.updated_at))).format('ddd, MMM DD - hh:mm a') }</li>
            <p><Remove id={obj._id} remove={this.remove} /></p>
            <p><ArchiveButton data={obj} /></p>
          </ul>

          { obj.status === 'booked' && !obj.archive ? <TimePicker data={obj} /> : ''}
        </div>
      </div>
    );
  }
});

module.exports = Person;
