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
    },
    {
      computed: false,
      key: 'organization',
      required: true,
      label: 'Organization',
      type: 'string',
    },
  ],
  customConfig: {},
};
