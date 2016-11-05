

const request = require('supertest');

const app = require('../../../server/app');

class ApiClient {

  constructor() {
    this.request = request(app);
    return this.request;
  }

}

module.exports = ApiClient;
