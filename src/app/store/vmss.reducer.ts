import { createReducer, on } from "@ngrx/store";

import * as VmssActions from "./vmss.actions";

const initialState: { status: Record<string, string>, error: string | null } = {
    status: {},
    error: null
};

export const vmssReducer = createReducer(
    initialState,
    on(VmssActions.getVmssVmStatusSuccess, (state, action) => ({
        ...state,
        status: action.status,
        error: null
    })),
    on(VmssActions.getVmssVmStatusFailure, (state, action) => ({
        ...state,
        //error: action.error.toString()
        error: 'Get status error'
    })),
    on(VmssActions.turnOnAllVmsSuccess, (state, action) => ({
        ...state,
        status: action.status,
        error: null
    })),
    on(VmssActions.turnOnAllVmsFailure, (state, action) => ({
        ...state,
        // error: action.error.toString()
        error: 'Turn on error'
    })),
    on(VmssActions.turnOffAllVmsSuccess, (state, action) => ({
        ...state,
        status: action.status,
        error: null
    })),
    on(VmssActions.turnOffAllVmsFailure, (state, action) => ({
        ...state,
        // error: action.error.toString()
        error: 'Turn off error'
    })),
);
