# Angular Client on Azure App Service
This is a proof of concept (POC) project for building and deploying an Angular application to Azure App Service through Azure DevOps.

# Prerequisites
- Azure subscription and resource group.
- Azure App Service resource (Linux with Node LTS runtime stack).
- Azure DevOps account with organization, project, pipeline, and service connection configured.

# Calling REST API Server with Redux (Ngrx Store)
Redux (ngrx store) is used by the Angular client to call REST API server.  Please ensure following packages are installed in Angular local environment:
- @ngrx/store
- @ngrx/effects
- rxjs
  
Also ensure to replace with your own REST API server URL in the effect.'

# Functionality of the application
As a Proof of Concept (POC), this application demonstrates the deployment process to Azure. Its core functionality revolves around managing virtual machines (VMs) within an Azure Virtual Machine Scale Set (VMSS). Specifically, it enables users to:

- Check VM Status: Query the VMSS to retrieve the current status of all its constituent VMs.
- Power On VMs: Initiate a power-on operation for all VMs in the VMSS.
- Power Off VMs: Initiate a power-off operation for all VMs in the VMSS.

Upon user interaction, the application dispatches an action to trigger an effect, which in turn calls a REST API to execute the corresponding operation. The API response, containing the updated VM status, is then fed to the reducer, which updates the application state. Finally, components subscribed to the store reflect these changes in the user interface.


# Accessing the Angular Application
The Angular application can be accessed via the following URL:

http://BillTestVmssClient_<unique_id>.azurewebsites.net
