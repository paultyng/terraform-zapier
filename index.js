const authentication = require('./authentication');

// triggers
const listWorkspacesTrigger = require('./triggers/list_workspaces.js');
const listWorkspaceVariablesTrigger = require('./triggers/list_workspace_variables.js');

// creates
const createRunCreate = require('./creates/create_run.js');
const updateVariableCreate = require('./creates/update_variable.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: {
    [listWorkspacesTrigger.key]: listWorkspacesTrigger,
    [listWorkspaceVariablesTrigger.key]: listWorkspaceVariablesTrigger,
  },
  creates: {
    [createRunCreate.key]: createRunCreate,
    [updateVariableCreate.key]: updateVariableCreate,
  },
};
