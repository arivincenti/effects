import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as UsuarioActions from '../actions/usuario.actions';
import { mergeMap, map, catchError, switchMap, exhaustMap, filter, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects
{

  constructor(
    private actions$: Actions,
    private _usuarioService: UsuarioService
  ) { }

  cargarUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(UsuarioActions.cargarUsuario),
    concatMap((action) => this._usuarioService.getUser(action.id)
      .pipe(
        map(usuario => UsuarioActions.cargarUsuarioSuccess({ usuario })),
        catchError(error => of(UsuarioActions.cargarUsuarioFail({ payload: error }))
        )
      )))
  )
}