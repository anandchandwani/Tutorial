var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dentistSchema = new Schema({
  created_at: { type: Date, default: Date.now },
  name: { type: String, required: true },
  patients: [ { type: mongoose.Schema.ObjectId, ref: 'Patient' } ]
});

var Dentist = mongoose.model('Dentist', dentistSchema);

var patientSchema = new Schema({
  created_at: { type: Date, default: Date.now },
  name: { type: String, required: true },
  age: Number
});

var Patient = mongoose.model('Patient', patientSchema);

mongoose.connect('mongodb://andy:corn@ds033143.mongolab.com:33143/dental', function() {

  var toad = new Patient({
    name: 'toad',
    age: 23,
  });

  var yoshi = new Patient({
    name: 'yoshi',
    age: 12
  });

  toad.save()

  .then(function() {
    return yoshi.save();
  })

  .then(function() {

    var mario = new Dentist({
      name: 'Mario',
      patients: [toad, yoshi]
    });

    return mario.save()
  })

  .then(function(record) {

    return record.populate('patients', function(err, populated) {
      if (err) console.error(err);

      console.log(populated.patients);
      mongoose.connection.close();
    });

  });


});
