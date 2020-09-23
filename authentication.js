module.exports = {
  type: 'custom',
  connectionLabel: '{{bundle.authData.organization}}',
  test: {
    url:
      'https://app.terraform.io/api/v2/organizations/{{bundle.authData.organization}}/workspaces',
    method: 'GET',
    params: {
      organization: '{{bundle.authData.organization}}',
      token: '{{bundle.authData.token}}',
    },
    headers: {
      Authorization: 'Bearer {{bundle.authData.token}}',
      'Content-Type': 'application/vnd.api+json',
      'X-TOKEN': '{{bundle.authData.token}}',
      'X-ORGANIZATION': '{{bundle.authData.organization}}',
    },
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    {
      computed: false,
      key: 'token',
      required: true,
      label: 'API Token',
      type: 'password',
      helpText: 'This can be a user or team API token. We recommend creating a "Zapier" team for your organization ' +
        'and then using the token for that team. You can manage your user tokens in your settings: ' +
        'https://app.terraform.io/app/settings/tokens',
    },
    {
      computed: false,
      key: 'organization',
      required: true,
      label: 'Organization',
      type: 'string',
      helpText: 'This is the organization name, you can view your organizations in your settings: ' +
        'https://app.terraform.io/app/settings/organizations',
    },
  ],
  customConfig: {},
};
