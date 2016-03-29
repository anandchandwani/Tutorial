if (!(process.env.NODE_ENV !== 'test' || process.env.NODE_ENV !== 'mock')) throw new Error('This file is for the test database only. Be sure to run it in NODE_ENV=test');

var config = require('config');
var mongoose = require('mongoose');
mongoose.connect(config.get('mongo'));
var Application = require('./models/applyModel');
var Pending = require('./models/pendingModel');
var User = require('./models/userModel');

var Promise = require('bluebird');

var app1, app2, promises = [];

var statuses = ['applied', 'emailed', 'booked', 'accept', 'reject'];

var jsHard = {
  fullName: 'andy carlson',
  age: 24,
  contactInfo: ['thing', 'stuff'],
  src: '/js-the-hard-parts',
  created_at: new Date('2015-08-22T12:30:00'),
}

var appForm = {
  info: ['cool tester', 'bleh'],
  links: ['github', 'linkedin'],
  education: ['corn', 'salsa'],
  startDate: 'now',
  passion: 'Lorem ipsum In est do non esse magna incididunt tempor eu exercitation labore esse voluptate Ut officia Excepteur dolore nostrud labore laborum.',
  experience: 'Lorem ipsum Cupidatat veniam eiusmod dolor dolore enim Excepteur Duis esse culpa ut.',
  projects: 'Lorem ipsum Pariatur occaecat Duis enim ad eu ea ex in eiusmod eiusmod culpa non sed.',
  src: '/apply',
  refer: 'quora',
  created_at: new Date('2015-08-29T12:30:00')
}


var pend1 = new Pending({
  complete: true,
  created_at: new Date('2015-08-29T12:30:00'),
  code: "var firstName = \"Adan\";\nvar lastName = \"Altamira\";\nvar fullName = firstName + \" \" + lastName;\nvar age = 29;\nvar github = \"https://github.com/adanaltamira\";\nvar email = \"holler@adanaltamira.com\";\nvar phone = \"6309355603\";\nvar contactInfo = [github, email, phone];\nvar Application = function (fullName, age, contactInfo) {\n  this.fullName = fullName;\n  this.age = age;\n  this.contactInfo = contactInfo;\n}\nApplication.prototype.getFutureAge = function () {return this.age + 1;}\n\nvar application = new Application('John Hancock', 22, ['github.com/johnhancock', 'j@hancock.net', '213-219-1291']); \napplication.getFutureAge();\nconsole.log(application)\n"
});

var pend2 = new Pending({
  created_at: new Date('2015-08-22T12:30:00'),
  code: "var firstName = \"Casandra\";\nvar lastName = \"Silva\";\nvar fullName = firstName + \" \" + lastName;\nvar age = 23;\nvar github = \"casandrawith1s\";\nvar email = \"silvacasandra@gmail.com\";\nvar phone = \"682-597-2423\";\nvar contactInfo = [github, email, phone];\n\nfunction Application (fullName, age, contactInfo) {\n  \n  this.fullName = fullName;\n  this.age = age;\n  this.contactInfo = contactInfo;\n};\n\nvar getFutureAge () {\n  Application.prototype\n \n  "
});

var pend3 = new Pending({
  created_at: new Date('2015-08-22T12:30:00'),
  code: "var firstName=\"Joyce\";\nvar lastName=\"Hong\";\nvar fullName = firstName + ' ' + lastName;\nvar email = \"justonly@uga.edu\"\nvar phone = 7062221323\nvar city =\"Los Angeles\"\nvar info = [fullName, email, phone, city]\nvar links =\n    [\"www.linkedin.com/profile/view?id=AAIAAAlvmjYBArbV-JzLDGlObkWz7PjQeYGAWqE&trk=nav_responsive_tab_profile\",\n      \"https://github.com/joycehom\"]\nvar education = [\"University of Georgia\", \"advertising\",2014]\nvar \n\n             \n"
});

var pend4 = new Pending({
  complete: true,
  created_at: new Date('2015-08-29T12:30:00'),
  code: [
    "var firstName = 'andy';",
    "var lastName = 'carlson';",
    "var fullName = firstName + ' ' + lastName;",
    "var age = 23;",
    "var github = 'acarl005';",
    "var email = 'acarl@ucla.edu';",
    "var phone = '(925) 325-0962';",
    "var contactInfo = [phone, github, email];",
    "function createApp(a, b, c) {",
    "  return {",
    "    fullName: a,",
    "    age: b,",
    "    contactInfo: c",
    "  };",
    "}",
    "function once(func) {",
    "  var called = false;",
    "  var output;",
    "  return function() {",
    "    if (!called) {",
    "      called = true;",
    "      output = func.apply(this, arguments)",
    "    }",
    "    return output;",
    "  }",
    "}"
  ].join('\n')
});

var pend5 = new Pending({
  complete: true,
  created_at: new Date('2015-08-29T12:30:00'),
  code: [
    "var firstName = 'andy';",
    "var lastName = 'carlson';",
    "var fullName = firstName + ' ' + lastName;",
    "var age = 23;",
    "var github = 'acarl005';",
    "var email = 'acarl@ucla.edu';",
    "var phone = '(925) 325-0962';",
    "var contactInfo = [phone, github, email];",
    "function createApp(a, b, c) {",
    "  return {",
    "    fullName: a,",
    "    age: b,",
    "    contactInfo: c",
    "  };",
    "}",
    "function filter(arr, func) {",
    "  return arr.reduce(function(acc, el) {",
    "    if (func(el)) acc.push(el);",
    "    return acc;",
    "  }, []);",
    "}"
  ].join('\n')
});

var pend6 = new Pending({
  complete: true,
  code: [
    "var firstName = 'andy';",
    "var lastName = 'carlson';",
    "var fullName = firstName + ' ' + lastName;",
    "var email = 'acarl005@g.ucla.edu';",
    "var phone = 3324573290;",
    "var city = 'alamo, ca';",
    "var info = [fullName, email, phone, city];",
    "var links = ['https://linkedin.com/in/acarl005', 'https://github.com/acarl005'];",
    "var education = ['UCLA', 'chem', 2014];",
    "function createApp(a, b, c) {",
    "  return {",
    "    info: a,",
    "    links: b,",
    "    education: c,",
    "  };",
    "}"
  ].join('\n')
});


Promise.all([
  Pending.remove().exec(),
  Application.remove().exec(),
  User.remove().exec()
])

.then(function() {
  statuses.forEach(function(status) {
    jsHard.status = appForm.status = status;
    app1 = new Application(jsHard);
    app2 = new Application(appForm);
    promises.push(app1.save(), app2.save());
  });

  promises.push(
    pend1.save(),
    pend2.save(),
    pend3.save(),
    pend4.save(),
    pend5.save(),
    pend6.save()
  );

  return Promise.all(promises);
})

.then(function() {
  var user1 = new User({
    _id: '398510935',
    github_login: 'acarl005',
    name: 'Andrew Carlson',
    email: 'acarl005@g.ucla.edu',
    created_at: new Date('2015-08-29T10:30:00'),
    pendings: pend1._id
  });

  pend1._user = user1._id;
  app1._user = user1._id;

  var user2 = new User({
    _id: '239417095',
    github_login: 'azai91',
    name: 'Alex Zai',
    email: 'azai91@gmail.com',
    created_at: new Date('2015-08-29T12:30:00'),
    applications: [app2._id, app1._id]
  });

  app2._user = user2._id;
  app1._user = user2._id;

  return Promise.all([
    user1.save(), 
    user2.save(),
    app1.save(),
    app2.save(),
    pend1.save()
  ]);
  
})

.then(function() {
  mongoose.connection.close();
});

