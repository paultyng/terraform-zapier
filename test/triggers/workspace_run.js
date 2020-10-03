/* globals describe it */
const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('Trigger - workspace_run', () => {
  it('should run triggers.workspace_run', async () => {
    const bundle = {
      meta: {
        page: 1,
        limit: -1,
      },

      authData: {
        token: process.env.TOKEN,
        organization: process.env.ORGANIZATION,
      },

      inputData: {
        workspace_id: 'ws-zWGn17bGEkcCScDJ',

      },
    };

    const results = await appTester(App.triggers.workspace_run.operation.perform, bundle);

    results.should.be.an.Array();
  });

  it('should run triggers.workspace_run filtered by status', async () => {
    const bundle = {
      meta: {
        page: 1,
        limit: -1,
      },

      authData: {
        token: process.env.TOKEN,
        organization: process.env.ORGANIZATION,
      },

      inputData: {
        workspace_id: 'ws-zWGn17bGEkcCScDJ',
        filter_status: ['planned'],
      },
    };

    const results = await appTester(App.triggers.workspace_run.operation.perform, bundle);

    results.should.be.an.Array();
  });
});
