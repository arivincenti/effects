import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction(
  '[Usuarios Actions] Cargar Usuarios'
);

export const cargarUsuariosFail = createAction(
  '[Usuarios Actions] Cargar Usuarios Fail',
  props<{payload: any}>()
);

export const cargarUsuariosSuccess = createAction(
  '[Usuarios Actions] Cargar Usuarios Success',
  props<{usuarios: UsuarioModel[]}>()
);