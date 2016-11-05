const request = require('supertest');
const app = require('../../app');

describe('/', () => {
  it('should respond 200 OK', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});
