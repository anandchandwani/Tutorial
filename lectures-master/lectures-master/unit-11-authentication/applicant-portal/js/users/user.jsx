var React = require('react');
var { Link } = require('react-router');
var { $delete, $put } = require('../utils/ajax');
var Remove = require('../remove');
var Actions = require('../actions');
var Store = require('../store');
var CodeWindow = require('../utils/code-window');
var Copyable = require('../utils/copyable');

var User = React.createClass({

  remove: function(id) {
    $delete('/users/' + id).success(() => {
      Actions.remove('users', id);
    });
  },

  getPhoto: function(e) {
    e.preventDefault();
    $.get('https://api.fullcontact.com/v2/person.json?apiKey=718b6f1da5cac033&email=' + this.props.data.email)
    .success(this.savePhoto)
    .fail(err => {
      console.log(err);
      this.noPhoto(this.props.data._id);
    });
  },

  savePhoto: function(data) {
    var id = this.props.data._id;
    try {
      var pic_url = data.photos[0].url;
      $put('/users/' + id, { pic_url }).success(res => {
        Actions.update(id, 'users', { pic_url });
      });
    } catch(err) {
      this.noPhoto(id);
    }
  },

  noPhoto: function(id) {
    var pic_url = null;
    $put('/users/' + id, { pic_url }).success(res => {
      Actions.update(id, 'users', { pic_url });
    });
  },

  render: function() {
    var obj = this.props.data;
    var app = Store.state.apps.find(app => app._id === obj.applications[0]);
    var pend = Store.state.pendings.find(pend => pend._id === obj.pendings);
    
    var status;
    if (app)
      status = <Link to="app" params={{ id: app._id }}>{ app.status }</Link>;
    else if (pend && pend.complete) 
      status = 'Passing attmept';
    else if (pend && !pend.complete)
      status = 'Non-passing attempt';
    else
      status = 'No attempt';

    var i = this.props.i;

    var pendPanel;
    if (pend) {
      pendPanel = (
        <div className="clear col-xs-offset-2">
          <a data-toggle="collapse" href={"#user" + i}
             className="pull-left"
             aria-expanded="false" aria-controls={'user'+i}>
            See attempt
            <span className={pend.complete ? 'glyphicon glyphicon-ok' : ''} />
          </a><br />

          <div className="collapse" id={'user'+i} >
            <CodeWindow code={pend.code} />
          </div>
        </div>
      );
    }

    var panelClass;
    if (obj.applications.length)
      panelClass = 'panel-primary';
    else if (obj.pendings)
      panelClass = 'panel-info';
    else
      panelClass = 'panel-default';

    var photo;
    if (obj.pic_url === null) 
      photo = <img src="img/default-pic.svg" className="img-fill" />;
    else if (obj.pic_url) 
      photo = <img src={obj.pic_url} className="img-fill" />;
    else 
      photo = <a onClick={this.getPhoto} className="get-photo" href="#">Get Photo</a>;
   
    var created = (moment(new Date(obj.created_at))).format('ddd, MMM DD - hh:mm a');

    return (
      <div className={'panel ' + panelClass}>
        <div className="panel-body">
          <div className="col-xs-2">
            { photo }
          </div>
          <ul className="list-group col-xs-6">
            <li>
              <Link to="user" params={{ id: obj._id }} className="name">
                { obj.name || obj.github_login }
              </Link>
            </li>
            <li><strong>email:</strong> <Copyable>{ obj.email }</Copyable></li>
            <li><strong>status:</strong> { status }</li>
          </ul>
          <ul className="list-group col-xs-4">
            <li><strong>created:</strong> { created }</li>
            <p><Remove id={obj._id} remove={this.remove} /></p>
          </ul>
          { pendPanel }
        </div>
      </div>

    );
  }
});

module.exports = User;