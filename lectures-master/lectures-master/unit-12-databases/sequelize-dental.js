var Sequelize = require('sequelize');
var Promise = require('bluebird');

var sequelize = new Sequelize('dental', 'andy', 'corn', {
  host: 'localhost',
  dialect: 'postgres'
});

var Dentist = sequelize.define('dentist', {
  name: { type: Sequelize.STRING, allowNull: false },
});
var Following = sequelize.define('Following', {});


Dentist.belongsToMany(Dentist, { through: Following, as: 'Follower', foreignKey: 'follower_id' })
Dentist.belongsToMany(Dentist, { through: Following, as: 'Followed', foreignKey: 'followed_id' })

Promise.all([
  Dentist.sync({ force: true }), 
  Following.sync({ force: true })
])

.then(function() {
  var mario = Dentist.create({
    name: "Mario",
  });
  var luigi = Dentist.create({
    name: 'Luigi',
  })
  return Promise.all([mario, luigi]);
})

.then(function(dentists) {

  var mario = dentists[0];
  var luigi = dentists[1];


  luigi.addFollowed(mario)
  // mario.addFollower(luigi)

  .then(function() {
    return luigi.getFollowed();
  })
  .then(function(followers) {
    console.log(followers[0].dataValues);
    sequelize.close();
  });

});