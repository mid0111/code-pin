const chai = require('chai');
const ApiClient = require('./ApiClient');

const expect = chai.expect;
const request = new ApiClient();

describe('/auth/github', () => {
  it('should redirect to github OAuth2 page', (done) => {
    request
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
    request
      .get('/auth/github/callback')
      .expect(302)
      .expect((res) => {
        expect(res.headers.location).to.match(/^https:\/\/github.com\/login\/oauth\/authorize/);
      })
      .end(done);
  });
});
