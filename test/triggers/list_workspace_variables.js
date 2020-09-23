require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Trigger - list_workspace_variables', () => {
    zapier.tools.env.inject();

    it('should get an array', async () => {
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
            },
        };

        const results = await appTester(
            App.triggers['list_workspace_variables'].operation.perform,
            bundle
        );
        results.should.be.an.Array();
    });
});
