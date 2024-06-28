import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { vmssReducer } from './store/vmss.reducer';
import { VmssEffects } from './store/vmss.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ vmss: vmssReducer }), provideEffects([VmssEffects]), provideHttpClient()]
};
