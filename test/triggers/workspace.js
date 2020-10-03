require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Trigger - list_workspaces', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      meta: {
        page: 1,
        limit: -1,
      },

      authData: {
        token: process.env.TOKEN,
        organization: process.env.ORGANIZATION,
      },

      inputData: {},
    };

    const results = await appTester(
      App.triggers['list_workspaces'].operation.perform,
      bundle
    );
    results.should.be.an.Array();
  });
});
