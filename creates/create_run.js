const perform = (z, bundle) => {
  const options = {
    url: `https://app.terraform.io/api/v2/runs`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bundle.authData.token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    body: {
      data: {
        type: 'runs',
        attributes: {
          // 'is-destroy': bundle.inputData.is_destroy,
          message: bundle.inputData.message,
          // target-addrs
        },
        relationships: {
          workspace: {
            data: {
              type: 'workspaces',
              id: bundle.inputData.workspace_id,
            },
          },
        },
      },
    },
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
    sample: {
      "data": {
        "id": "run-CZcmD7eagjhyX0vN",
        "type": "runs",
        "attributes": {
          "auto-apply": false,
          "error-text": null,
          "is-destroy": false,
          "message": "Custom Message",
          "metadata": {},
          "source": "tfe-ui",
          "status": "pending",
          "status-timestamps": {},
          "terraform-version": "0.10.8",
          "created-at": "2017-11-29T19:56:15.205Z",
          "has-changes": false,
          "target-addrs": ["example.resource_address"],
          "actions": {
            "is-cancelable": true,
            "is-confirmable": false,
            "is-discardable": false,
          },
          "permissions": {
            "can-apply": true,
            "can-cancel": true,
            "can-discard": true,
            "can-force-execute": true
          }
        },
        // "relationships": {
        //   "apply": { ...},
        //   "canceled-by": { ... },
        //   "configuration-version": { ...},
        //   "confirmed-by": { ...},
        //   "cost-estimate": { ...},
        //   "created-by": { ...},
        //   "input-state-version": { ...},
        //   "plan": { ...},
        //   "run-events": { ...},
        //   "policy-checks": { ...},
        //   "workspace": { ...},
        //   "comments": { ...},
        //   "workspace-run-alerts": { ...}
        // }
      },
      "links": {
        "self": "/api/v2/runs/run-CZcmD7eagjhyX0vN"
      },
    },
    inputFields: [
      {
        key: 'workspace_id',
        label: 'Workspace',
        type: 'string',
        dynamic: 'list_workspaces.id.attributes__name',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'message',
        label: 'Message',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
        helpText: 'This is an optional message to show for the run.',
      },
      // {
      //   key: 
      // }
    ],
  },
  key: 'create_run',
  noun: 'Run',
  display: {
    label: 'Create a Run',
    description: 'A run performs a plan and apply. You may want to set your ' +
      '`Apply Method` to `Auto apply` for the workspace in the `General Settings`.',
    hidden: false,
    important: true,
  },
};
