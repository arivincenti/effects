import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';


export const cargarUsuario = createAction(
  '[Usuario Actions] Cargar Usuario',
  props<{ id: string }>()
);

export const cargarUsuarioFail = createAction(
  '[Usuario Actions] Cargar Usuario Fail',
  props<{payload: any}>()
)

export const cargarUsuarioSuccess = createAction(
  '[Usuario Actions] Cargar Usuario Success',
  props<{ usuario: UsuarioModel }>()
);