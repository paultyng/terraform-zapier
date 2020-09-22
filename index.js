const authentication = require('./authentication');
const listWorkspacesTrigger = require('./triggers/list_workspaces.js');
const createRunCreate = require('./creates/create_run.js');
const updateVariableCreate = require('./creates/update_variable.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: {
    [listWorkspacesTrigger.key]: listWorkspacesTrigger,
  },
  creates: {
    [createRunCreate.key]: createRunCreate,
    [updateVariableCreate.key]: updateVariableCreate,
  },
};
