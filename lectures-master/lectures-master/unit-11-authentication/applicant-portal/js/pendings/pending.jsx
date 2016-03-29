var React = require('react');
var { Link } = require('react-router');
var Remove = require('../remove');
var CodeWindow = require('../utils/code-window');
var Spacer = require('../utils/spacer');
var Actions = require('../actions');
var { $delete } = require('../utils/ajax');

var Pending = React.createClass({

  remove: function(id) {
    $delete('/pendings/' + id).success(() => {
      Actions.remove('pendings', id);
    });
  },

  render: function() {
    var obj = this.props.data;
    var i = this.props.index;
    
    var updated = moment(new Date(obj.updated_at)).format('ddd, MMM DD - hh:mm a');
    var created = moment(new Date(obj.created_at)).format('ddd, MMM DD - hh:mm a');

    var firstName, lastName
    try {
      firstName = obj.code.match(/var\s*firstName\s*=\s*['"](.*?)['"]/)[1];
      lastName = obj.code.match(/var\s*lastName\s*=\s*['"](.*?)['"]/)[1];
    }
    catch(e) {}

    return (
      <li className="list-group-item">
        <a data-toggle="collapse" href={"#item" + i}
           className="pull-left"
           aria-expanded="false" aria-controls={'item'+i}>
          <h4 className="list-group-item-heading">
            { firstName + ' ' + lastName }{' '}
            <span className={obj.complete ? 'glyphicon glyphicon-ok' : ''} />
          </h4>
        </a>
        <div className="pull-right">
          <Spacer width="30" />
          <strong>Updated:</strong> { updated }
        </div>
        <div className="clear" />
        <div className="collapse" id={'item'+i} >
          <h5><b>code:</b></h5>
          <CodeWindow code={obj.code} />
          { (() => {
            if (obj._user)
              return (
                <div>
                  <b>user: </b>
                  <Link to="user" params={{ id: obj._user._id }}>
                    { obj._user.email }
                  </Link>
                </div>
              );
          })() }
          <b>started:</b> { created }
          <p> </p>
        </div>
        <Remove id={obj._id} remove={this.remove} />
      </li>
    );
  }
});

module.exports = Pending;