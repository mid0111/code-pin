const request = require('supertest');
const chai = require('chai');

const expect = chai.expect;

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

describe('Error handler', () => {
  it('should respond 404 when routes not found', (done) => {
    request(app)
      .get('/not/exists/routes')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect((res) => {
        expect(res.body.error.message).to.be.a('string');
      })
      .end(done);
  });
});
