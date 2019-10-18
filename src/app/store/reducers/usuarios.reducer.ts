import { Action, on, createReducer } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';
import * as UsuariosActions from '../actions/usuarios.actions';

export interface UsuariosState
{
  usuarios: UsuarioModel[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const initialState: UsuariosState = {
  usuarios: [],
  loaded: false,
  loading: false,
  error: null
};

const UsuariosReducer = createReducer(
  initialState,
  on(UsuariosActions.cargarUsuarios, state => ({ ...state, loading: true })),
  on(UsuariosActions.cargarUsuariosFail, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      status: payload.status,
      message: payload.message,
      url: payload.url
    }
  })),
  on(UsuariosActions.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuarios: [...usuarios]
  })),
)

export function usuariosReducer(state: UsuariosState = initialState, action: Action)
{
  return UsuariosReducer(state, action);
}