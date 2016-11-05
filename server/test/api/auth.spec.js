const request = require('supertest');
const chai = require('chai');

const expect = chai.expect;

const app = require('../../app');

describe('/auth/github', () => {
  it('should redirect to github OAuth2 page', (done) => {
    request(app)
      .get('/auth/github')
      .expect(302)
      .expect((res) => {
        expect(res.headers.location).to.match(/^https:\/\/github.com\/login\/oauth\/authorize/);
      })
      .end(done);
  });
});

describe('/auth/github/callback', () => {
  it('should redirect to github OAuth2 page', (done) => {
    request(app)
      .get('/auth/github/callback')
      .expect(302)
      .expect((res) => {
        expect(res.headers.location).to.match(/^https:\/\/github.com\/login\/oauth\/authorize/);
      })
      .end(done);
  });
});
