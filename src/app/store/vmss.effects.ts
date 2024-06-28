import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";

import { getVmssVmStatus, getVmssVmStatusFailure, getVmssVmStatusSuccess, turnOffAllVms, turnOffAllVmsFailure, turnOffAllVmsSuccess, turnOnAllVms, turnOnAllVmsFailure, turnOnAllVmsSuccess } from "./vmss.actions";

const hostlink = 'http://127.0.0.1:5000/';
//const hostlink = 'https://billtestappservice.azurewebsites.net/';

@Injectable()
export class VmssEffects {
    getVmssVmStatus$ = createEffect(() => this._actions$.pipe(
        ofType(getVmssVmStatus),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink + 'status').pipe(
                map(f => {
                    return getVmssVmStatusSuccess({ status: f });
                }),
                catchError(e => of(getVmssVmStatusFailure(e)))
            );
        }),

    ));

    turnOnAllVms$ = createEffect(() => this._actions$.pipe(
        ofType(turnOnAllVms),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink + 'turnon').pipe(
                map(f => {
                    return turnOnAllVmsSuccess({ status: f });
                }),
                catchError(e => of(turnOnAllVmsFailure(e)))
            );
        }),

    ));

    turnOffAllVms$ = createEffect(() => this._actions$.pipe(
        ofType(turnOffAllVms),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink + 'turnoff').pipe(
                map(f => {
                    return turnOffAllVmsSuccess({ status: f });
                }),
                catchError(e => of(turnOffAllVmsFailure(e)))
            );
        }),

    ));

    constructor(private _actions$: Actions, private _http: HttpClient) { }
}