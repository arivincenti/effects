import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UsuariosActions from '../actions/usuarios.actions';
import { mergeMap, map, catchError, exhaustMap, switchMap} from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects
{
  constructor(
    private actions$: Actions,
    private _usuariosService: UsuarioService
  ) { }

  cargarUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(UsuariosActions.cargarUsuarios),
    mergeMap(() => this._usuariosService.getUsers().pipe(
      map(usuarios => (UsuariosActions.cargarUsuariosSuccess({usuarios}))
      ),
      catchError(error => of(UsuariosActions.cargarUsuariosFail({payload: error})))
    ))
  ));
}