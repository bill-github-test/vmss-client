import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";

import * as VmssActions from "./vmss.actions";

const hostlink = 'http://127.0.0.1:5000/';
//const hostlink = 'https://billtestappservice.azurewebsites.net/';

@Injectable()
export class VmssEffects {
    getVmssVmStatus$ = createEffect(() => this._actions$.pipe(
        ofType(VmssActions.getVmssVmStatus),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink + 'status').pipe(
                map(f => {
                    return VmssActions.getVmssVmStatusSuccess({ status: f });
                }),
                catchError(e => of(VmssActions.getVmssVmStatusFailure(e)))
            );
        }),

    ));

    turnOnAllVms$ = createEffect(() => this._actions$.pipe(
        ofType(VmssActions.turnOnAllVms),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink + 'turnon').pipe(
                map(f => {
                    return VmssActions.turnOnAllVmsSuccess({ status: f });
                }),
                catchError(e => of(VmssActions.turnOnAllVmsFailure(e)))
            );
        }),

    ));

    turnOffAllVms$ = createEffect(() => this._actions$.pipe(
        ofType(VmssActions.turnOffAllVms),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink + 'turnoff').pipe(
                map(f => {
                    return VmssActions.turnOffAllVmsSuccess({ status: f });
                }),
                catchError(e => of(VmssActions.turnOffAllVmsFailure(e)))
            );
        }),

    ));

    constructor(private _actions$: Actions, private _http: HttpClient) { }
}