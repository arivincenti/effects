import * as UsuariosReducers from './reducers/usuarios.reducer';
import * as UsuarioReducer from './reducers/usuario.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  usuarios: UsuariosReducers.UsuariosState,
  usuario: UsuarioReducer.UsuarioState
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: UsuariosReducers.usuariosReducer,
  usuario: UsuarioReducer.usuarioReducer
}