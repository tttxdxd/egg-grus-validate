'use strict';

const mock = require('egg-mock');

describe('test/grus-validate.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/grus-validate-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/?a=1&b=1')
      .expect('hi, validate params = {"a":1,"b":"1"}')
      .expect(200);
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/?a=1')
      .expect(422);
  });
});
