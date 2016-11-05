const chai = require('chai');
const ApiClient = require('./ApiClient');

const expect = chai.expect;
const request = new ApiClient();

describe('/', () => {
  it('should respond 200 OK', (done) => {
    request
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});

describe('Error handler', () => {
  it('should respond 404 when routes not found', (done) => {
    request
      .get('/not/exists/routes')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect((res) => {
        expect(res.body.error.message).to.be.a('string');
      })
      .end(done);
  });
});
