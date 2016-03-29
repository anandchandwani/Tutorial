//yee

process.env.NODE_ENV = 'test';
var request = require('supertest')('http://localhost:3000');
require('./../server/server');
var Message = require('./../server/message/messageModel');


var message_number;


describe('GET Node Calendar', function() {
  beforeEach(function (done) {
    Message.create({created_by: 'Codesmith', message: 'I love testing'}, function(err){
      if (err) throw err;
      done();
    })
  });

  afterEach(function (done) {
    Message.remove(function(err, message){
      if (err) throw err;
      done();
    });
  });

  it('should serve index.html on GET request to /',function(done) {
    request
      .get('/')
      .set('Accept','text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('should invalidate GET request to invalid urls', function(done) {
  	request
      .get('/error-route-that-shouldnt-exist')
      .expect(404, done);
  });
  
  it('should respond to GET request for /messages with message object', function(done) {
  	request
  	  .get('/messages')
  	  .expect(function(res) {
        if (!('created_by' in res.body[0])) throw new Error("missing created_by");
        if (!('message' in res.body[0])) throw new Error("missing message");
      })
  	  .end(done);
  });

  it('should respond to POST request to /messages with status code 200', function(done) {
    request
      .post('/messages')
      .send({created_by: 'Codesmith', message: 'we love testing'})
      .expect(200, done);
  });

  it('should send POST request to /messages', function(done) {
    request
      .post('/messages')
      .send({created_by: "Codesmith", message:"I testing"})
      .end(function(err){
      	request
      	  .get('/messages')
      	  .expect(function(res) {
            if (res.body.length <= 1) throw new Error("message not correctly posted");
          })
      	  .end(done);
      }); 
  });

});  
