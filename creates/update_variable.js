const perform = (z, bundle) => {
  const options = {
    url: `https://app.terraform.io/api/v2/workspaces/${bundle.inputData.workspace_id}/vars/${bundle.inputData.variable_id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${bundle.authData.token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    body: {
      data: {
        type: 'vars',
        id: bundle.inputData.variable_id,
        attributes: {
          value: bundle.inputData.value,
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
        "id": "var-yRmifb4PJj7cLkMG",
        "type": "vars",
        "attributes": {
          "key": "name",
          "value": "mars",
          "description": "some description",
          "sensitive": false,
          "category": "terraform",
          "hcl": false
        },
        "relationships": {
          "configurable": {
            "data": {
              "id": "ws-4j8p6jX1w33MiDC7",
              "type": "workspaces"
            },
            "links": {
              "related": "/api/v2/organizations/workspace-v2-06/workspaces/workspace-v2-06"
            }
          }
        },
        "links": {
          "self": "/api/v2/workspaces/ws-4j8p6jX1w33MiDC7/vars/var-yRmifb4PJj7cLkMG"
        }
      }
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
        key: 'variable_id',
        label: 'Variable',
        type: 'string',
        dynamic: 'list_workspace_variables.id.attributes__key',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'value',
        label: 'Value',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'update_variable',
  noun: 'Variable',
  display: {
    label: 'Set a Workspace Variable',
    description: 'Set a workspace variable to the specified value.',
    hidden: false,
    important: true,
  },
};
