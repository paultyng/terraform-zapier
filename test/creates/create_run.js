require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - create_run', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        token: process.env.TOKEN,
        organization: process.env.ORGANIZATION,
        oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
        oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
        oauth_token: process.env.OAUTH_TOKEN,
        oauth_token_secret: process.env.OAUTH_TOKEN_SECRET,
      },

      inputData: {
        workspace_id: 'ws-zWGn17bGEkcCScDJ',
        message: 'This is a test run',
      },
    };

    const result = await appTester(
      App.creates['create_run'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
