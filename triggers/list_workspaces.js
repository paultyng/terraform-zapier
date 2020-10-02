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
      "data": [
        {
          "id": "ws-SihZTyXKfNXUWuUa",
          "type": "workspaces",
          "attributes": {
            "auto-apply": false,
            "allow-destroy-plan": false,
            "can-queue-destroy-plan": false,
            "created-at": "2017-11-02T23:24:05.997Z",
            "description": null,
            "environment": "default",
            "file-triggers-enabled": true,
            "locked": false,
            "name": "workspace-2",
            "queue-all-runs": false,
            "source": "tfe-ui",
            "source-name": null,
            "source-url": null,
            "terraform-version": "0.10.8",
            "trigger-prefixes": [],
            "vcs-repo": {
              "branch": "",
              "default-branch": true,
              "ingress-submodules": false
            },
            "working-directory": ""
          },
          "relationships": {
            "organization": {
              "data": {
                "id": "my-organization",
                "type": "organizations"
              }
            },
            "ssh-key": {
              "data": null
            },
            "latest-run": {
              "data": null
            }
          },
          "links": {
            "self": "/api/v2/organizations/my-organization/workspaces/workspace-2"
          }
        },
        {
          "id": "ws-YnyXLq9fy38afEeb",
          "type": "workspaces",
          "attributes": {
            "auto-apply": false,
            "allow-destroy-plan": false,
            "can-queue-destroy-plan": false,
            "created-at": "2017-11-02T23:23:53.765Z",
            "description": null,
            "environment": "default",
            "file-triggers-enabled": true,
            "locked": false,
            "name": "workspace-1",
            "queue-all-runs": false,
            "source": "tfe-ui",
            "source-name": null,
            "source-url": null,
            "terraform-version": "0.10.8",
            "trigger-prefixes": [],
            "vcs-repo": {
              "branch": "",
              "default-branch": true,
              "ingress-submodules": false
            },
            "working-directory": ""
          },
          "relationships": {
            "organization": {
              "data": {
                "id": "my-organization",
                "type": "organizations"
              }
            },
            "ssh-key": {
              "data": null
            },
            "latest-run": {
              "data": null
            }
          },
          "links": {
            "self": "/api/v2/organizations/my-organization/workspaces/workspace-1"
          }
        }
      ]
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
