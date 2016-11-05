var request = require('supertest');
var app = require('../../app');

describe('/', () => {
  it('should respond 200 OK', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});
