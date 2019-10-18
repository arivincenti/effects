import * as UsuariosReducers from './reducers/usuarios.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  usuarios: UsuariosReducers.UsuariosState
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: UsuariosReducers.usuariosReducer
}