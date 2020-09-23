const perform = (z, bundle) => {
    const options = {
        url: `https://app.terraform.io/api/v2/workspaces/${bundle.inputData.workspace_id}/vars`,
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
                    "id": "var-AD4pibb9nxo1468E",
                    "type": "vars", "attributes": {
                        "key": "name",
                        "value": "hello",
                        "description": "some description",
                        "sensitive": false,
                        "category": "terraform",
                        "hcl": false
                    },
                    "relationships": {
                        "configurable": {
                            "data": {
                                "id": "ws-cZE9LERN3rGPRAmH",
                                "type": "workspaces"
                            },
                            "links": {
                                "related": "/api/v2/organizations/my-organization/workspaces/my-workspace"
                            }
                        }
                    },
                    "links": {
                        "self": "/api/v2/workspaces/ws-cZE9LERN3rGPRAmH/vars/var-AD4pibb9nxo1468E"
                    }
                }
            ]
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
        ],
        outputFields: [
            { key: 'id', label: 'ID' },
            { key: 'attributes__key', label: 'Key' },
            { key: 'attributes__description', label: 'Description' },
            { key: 'attributes__category', label: 'Category' },
            { key: 'attributes__hcl', type: 'boolean', label: 'HCL' },
        ],
    },
    key: 'list_workspace_variables',
    noun: 'Workspace Variable',
    display: {
        label: 'List Workspace Variables',
        description: 'List variables in this workspace.',
        hidden: true,
        important: false,
    },
};
