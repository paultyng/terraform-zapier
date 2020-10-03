# Zapier / Terraform Cloud Integration

[Invitation Link](https://zapier.com/developer/public-invite/116848/b681023c9a74112a54b2a581c5deb4d2/)

This Zapier applications provides the following actions:

* **Create Run** - this creates a run in the Terraform Cloud workspace. Typically you would set your workspace to auto-apply to have this immediately take affect without human intervention.
* **Update Variable** - use this to set a variable in a Terraform Cloud workspace. You must create the variable first. If the variable is set to HCL format, you must make sure this value is valid HCL (ie. quotes around strings, etc.).

## Getting Started

1. Create a Terraform Cloud organization and workspace if you haven't already.
1. Create a team for "Zapier". It does not need any organization access.
1. Add the team to your workspace with **write** permissions.
1. Add a **Team API Token** for the "Zapier" team.
1. Set the token and organization name as the authentication information for the Terraform Cloud Zapier app.
1. Create your Zaps!

## Zapier Docs

* Zapier Platform CLI docs: https://github.com/zapier/zapier-platform/tree/master/packages/cli
* Zapier example app: https://github.com/zapier/zapier-platform-example-app-github
