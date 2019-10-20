import { UsuarioModel } from '../../models/usuario.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as UsuarioActions from '../actions/usuario.actions';

export interface UsuarioState
{
  usuario: UsuarioModel,
  loaded: boolean,
  loading: boolean,
  error: any
}

export const initialState: UsuarioState = {
  usuario: null,
  loaded: false,
  loading: false,
  error: null
}

export const UsuarioReducer = createReducer(
  initialState,
  on(UsuarioActions.cargarUsuario, (state) => (
    {
      ...state,
      loading: true
    }
  )),
  on(UsuarioActions.cargarUsuarioFail, (state, {payload}) => (
    {
      ...state,
      loading: false,
      loaded: false,
      error: payload
    }
  )),
  on(UsuarioActions.cargarUsuarioSuccess, (state, { usuario }) => (
    {
      ...state,
      loading: false,
      loaded: true,
      usuario: { ...usuario }
    }
  ))
)

export function usuarioReducer(state: UsuarioState = initialState, action: Action)
{
  return UsuarioReducer(state, action);
}