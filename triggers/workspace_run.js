// https://www.terraform.io/docs/cloud/api/run.html#list-runs-in-a-workspace

const perform = async (z, bundle) => {
  const params = {
    'page[number]': bundle.meta.page + 1,
  };

  if (bundle.meta.limit > 0) {
    params['page[size]'] = bundle.meta.limit;
  }

  const response = await z.request({
    url: `https://app.terraform.io/api/v2/workspaces/${bundle.inputData.workspace_id}/runs`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bundle.authData.token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    params,
  });

  if (bundle.inputData.filter_status) {
    return response.json.data.filter(run => bundle.inputData.filter_status.includes(run.attributes.status))
  }

  return response.json.data;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#triggerschema
  key: 'workspace_run',
  noun: 'Workspace Run',

  display: {
    label: 'New Workspace Run',
    description: 'Triggers when a new workspace run is created.',
    important: true,
  },

  operation: {
    canPaginate: true,
    perform,

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
        key: 'filter_status',
        label: 'Status',
        type: 'string',
        choices: [
          // https://www.terraform.io/docs/cloud/api/run.html#run-states
          'pending',
          'plan_queued',
          'planning',
          'planned',
          'cost_estimating',
          'cost_estimated',
          'policy_checking',
          'policy_override',
          'policy_soft_failed',
          'policy_checked',
          'confirmed',
          'planned_and_finished',
          'apply_queued',
          'applying',
          'applied',
          'discarded',
          'errored',
          'canceled',
          'force_canceled',
        ],
        required: false,
        list: true,
        altersDynamicFields: false,
      },
    ],

    sample: {
      "id": "run-bWSq4YeYpfrW4mx7",
      "type": "runs",
      "attributes": {
        "auto-apply": false,
        "error-text": null,
        "is-destroy": false,
        "message": "",
        "metadata": {},
        "source": "tfe-configuration-version",
        "status": "planned",
        "status-timestamps": {
          "planned-at": "2017-11-28T22:52:51+00:00"
        },
        "terraform-version": "0.11.0",
        "created-at": "2017-11-28T22:52:46.711Z",
        "has-changes": true,
        "actions": {
          "is-cancelable": false,
          "is-confirmable": true,
          "is-discardable": true,
          "is-force-cancelable": false
        },
        "permissions": {
          "can-apply": true,
          "can-cancel": true,
          "can-discard": true,
          "can-force-cancel": false,
          "can-force-execute": true
        }
      },
      "relationships": {
        // "workspace": {...},
        // "apply": {...},
        // "canceled-by": {...},
        // "configuration-version": {...},
        // "confirmed-by": {...},
        // "cost-estimate": {...},
        // "created-by": {...},
        // "input-state-version": {...},
        // "plan": {...},
        // "run-events": {...},
        // "policy-checks": {...},
        // "comments": {...},
        // "workspace-run-alerts": {...},
        // "triggering-source": {...},
        // "triggering-run": {...}
      },
      "links": {
        "self": "/api/v2/runs/run-bWSq4YeYpfrW4mx7"
      }
    },

    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'attributes__message', label: 'Message' },
      { key: 'attributes__source', label: 'Source' },
      { key: 'attributes__status', label: 'Status' },
      { key: 'attributes__is-destroy', type: 'boolean', label: 'Is Destroy?' },
      { key: 'attributes__terraform-version', label: 'Terraform CLI Version' },
      { key: 'attributes__category', label: 'Category' },
      { key: 'attributes__has-changes', type: 'boolean', label: 'Has Changes' },
    ]
  }
};
