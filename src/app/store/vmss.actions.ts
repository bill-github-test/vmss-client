import { createAction, props } from "@ngrx/store";

export const getVmssVmStatus = createAction(
    '[VMSS] Get VMSS VM Status'
);

export const getVmssVmStatusSuccess = createAction(
    '[VMSS] Get VMSS VM Status Success', 
    props<{status: Record<string, string>}>()
);

export const getVmssVmStatusFailure = createAction(
    '[VMSS] Get VMSS VM Status Failure', 
    props<{error: any}>()
);

export const turnOnAllVms = createAction(
    '[VMSS] Turn on all VMs'
);

export const turnOnAllVmsSuccess = createAction(
    '[VMSS] Turn on all VMs Success', 
    props<{status: Record<string, string>}>()
);

export const turnOnAllVmsFailure = createAction(
    '[VMSS] Turn on all VMs Failure', 
    props<{error: any}>()
);

export const turnOffAllVms = createAction(
    '[VMSS] Turn off all VMs'
);

export const turnOffAllVmsSuccess = createAction(
    '[VMSS] Turn off all VMs Success', 
    props<{status: Record<string, string>}>()
);

export const turnOffAllVmsFailure = createAction(
    '[VMSS] Turn off all VMs Failure', 
    props<{error: any}>()
);