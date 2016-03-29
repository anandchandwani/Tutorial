var React = require('react');
var { Link } = require('react-router');
var Item = require('../apps/item');
var NotFound = require('../utils/not-found');
var { $put } = require('../utils/ajax');
var Actions = require('../actions');

var Popup = React.createClass({

  getPhoto: function() {
    $.get('https://api.fullcontact.com/v2/person.json?apiKey=718b6f1da5cac033&email=' + this.email)
    .success(this.savePhoto)
    .fail(err => {
      console.log(err);
      this.noPhoto(this.props.params.id);
    });
  },

  savePhoto: function(data) {
    var id = this.props.params.id;
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
    var id = this.props.params.id;
    var obj = this.props.users.find(obj => obj._id === id);
    var items = [];
    var count = 0;
    for (let i in obj) {
      items.push(<Item prop={i} val={obj[i]} key={count++} />);
    }

    if (obj) {
      this.email = obj.email;
      var photo;
      if (obj.pic_url === null) {
        photo = <a onClick={this.getPhoto} className="get-photo tried">Get Photo</a>;
      } else if (obj.pic_url) {
        photo = <img src={obj.pic_url} className="img-responsive" />;
      } else {
        photo = <a onClick={this.getPhoto} className="get-photo">Get Photo</a>;
      }
      return (
        <div className="container-fluid">
          <h4 style={{ textAlign: 'right' }}>
            <Link to="users">
              { String.fromCharCode(8592) }
              {' '}Users
            </Link>
          </h4>
          <ul className="user-info">
            <li className="list-group-item">
              { photo }
            </li>
            { items }
          </ul>
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
});

module.exports = Popup;