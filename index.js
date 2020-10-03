const authentication = require('./authentication');

// triggers
const listWorkspacesTrigger = require('./triggers/workspace.js');
const listWorkspaceVariablesTrigger = require('./triggers/workspace_variable.js');
const getWorkspaceRun = require("./triggers/workspace_run");

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
    [getWorkspaceRun.key]: getWorkspaceRun,
  },
  creates: {
    [createRunCreate.key]: createRunCreate,
    [updateVariableCreate.key]: updateVariableCreate,
  },
};
