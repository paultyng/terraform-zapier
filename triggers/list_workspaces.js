const perform = (z, bundle) => {
  const options = {
    url: `https://app.terraform.io/api/v2/organizations/${bundle.authData.organization}/workspaces`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bundle.authData.token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them
    return results.data;
  });
};

module.exports = {
  operation: {
    perform: perform,
    canPaginate: false,
    sample: {
      id: 'ws-edkHutTp89sMpmP5',
      type: 'workspaces',
      attributes: {
        name: 'home-network',
        'auto-apply': false,
        'created-at': '2020-01-02T19:56:29.993Z',
        environment: 'default',
        locked: false,
        'queue-all-runs': false,
        'terraform-version': '0.13.2',
        'working-directory': '',
        'speculative-enabled': true,
        'allow-destroy-plan': false,
        'auto-destroy-at': null,
        'latest-change-at': '2020-09-13T18:17:46.467Z',
        operations: true,
        'execution-mode': 'agent',
        'vcs-repo': {
          branch: '',
          'ingress-submodules': false,
          identifier: 'paultyng/home-network',
          'display-identifier': 'paultyng/home-network',
          'github-app-installation-id': 'ghain-jE8WZa2Qdmisumh3',
        },
        'vcs-repo-identifier': 'paultyng/home-network',
        permissions: {
          'can-update': false,
          'can-destroy': false,
          'can-queue-destroy': true,
          'can-queue-run': true,
          'can-queue-apply': true,
          'can-read-state-versions': true,
          'can-create-state-versions': true,
          'can-read-variable': true,
          'can-update-variable': true,
          'can-lock': true,
          'can-unlock': true,
          'can-force-unlock': false,
          'can-read-settings': true,
        },
        actions: { 'is-destroyable': false },
        description: null,
        'file-triggers-enabled': false,
        'trigger-prefixes': [],
        source: 'tfe-ui',
        'source-name': null,
        'source-url': null,
      },
      relationships: {
        organization: { data: { id: 'paultyng', type: 'organizations' } },
        'current-run': {
          data: { id: 'run-nFJmdY8VstXG6CBR', type: 'runs' },
          links: { related: '/api/v2/runs/run-nFJmdY8VstXG6CBR' },
        },
        'latest-run': {
          data: { id: 'run-nFJmdY8VstXG6CBR', type: 'runs' },
          links: { related: '/api/v2/runs/run-nFJmdY8VstXG6CBR' },
        },
        'current-state-version': {
          data: { id: 'sv-BKgV4FbdvaKsEhpR', type: 'state-versions' },
          links: {
            related:
              '/api/v2/workspaces/ws-edkHutTp89sMpmP5/current-state-version',
          },
        },
        'agent-pool': {
          data: { id: 'apool-T9mYAYemBBrn4mXo', type: 'agent-pools' },
        },
      },
      links: { self: '/api/v2/organizations/paultyng/workspaces/home-network' },
    },
    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'attributes__name', label: 'Name' },
      { key: 'attributes__locked', type: 'boolean', label: 'Locked' },
      { key: 'attributes__terraform-version', label: 'Terraform CLI Version' },
      { key: 'attributes__working-directory', label: 'Working Directory' },
      {
        key: 'attributes__speculative-enabled',
        type: 'boolean',
        label: 'Speculative Enabled',
      },
      { key: 'attributes__description', label: 'Description' },
    ],
  },
  key: 'list_workspaces',
  noun: 'Workspace',
  display: {
    label: 'List Workspaces',
    description: 'List workspaces in this organization.',
    hidden: true,
    important: false,
  },
};
