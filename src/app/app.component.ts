import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getVmssVmStatus, turnOffAllVms, turnOnAllVms } from './store/vmss.actions';
import { selectVmss } from './store/vmss.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'azure-api';

  vmss$: Observable<Record<string, string>>;

  constructor(private _store: Store<{vmss: Record<string, string>}>) {
    this.vmss$ = _store.select(selectVmss);
  }

  ngOnInit(): void {
  }

  getStatus(): void {
    this._store.dispatch(getVmssVmStatus());
  }

  turnOnAllVms(): void {
    this._store.dispatch(turnOnAllVms());
  }

  turnOffAllVms(): void {
    this._store.dispatch(turnOffAllVms());
  }
}
