module.exports = {
  operation: {
    perform: {
      body: {
        message: '{{bundle.inputData.message}}',
        workspace_id: '{{bundle.inputData.workspace_id}}',
      },
    },
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
      },
    ],
  },
  key: 'create_run',
  noun: 'Run',
  display: {
    label: 'Create a Run',
    description: 'A run performs a plan and apply.',
    hidden: false,
    important: true,
  },
};
