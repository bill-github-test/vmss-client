import { createReducer, on } from "@ngrx/store";
import { getVmssVmStatusSuccess, turnOnAllVmsSuccess, turnOffAllVmsSuccess } from "./vmss.actions";

const initialState: Record<string, string> = {};

export const vmssReducer = createReducer(
    initialState,
    on(getVmssVmStatusSuccess, (state, action) => { 
        return action.status
    }),
    on(turnOnAllVmsSuccess, (state, action) => { 
        return action.status
    }),
    on(turnOffAllVmsSuccess, (state, action) => { 
        return action.status
    }),
)