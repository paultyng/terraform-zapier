require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - update_variable', () => {
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
        // https://app.terraform.io/api/v2/workspaces/ws-zWGn17bGEkcCScDJ/vars?filter%5Bworkspace%5D%5Bid%5D=ws-zWGn17bGEkcCScDJ
        workspace_id: 'ws-zWGn17bGEkcCScDJ',
        variable_id: 'var-G4dskNFtdXDh9eyn',
        value: 'value2',
      },
    };

    const result = await appTester(
      App.creates['update_variable'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
