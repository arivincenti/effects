import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as UsuariosActions from 'src/app/store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit
{

  usuarios: UsuarioModel[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit()
  {
    this.store.dispatch(UsuariosActions.cargarUsuarios());
    this.store.select('usuarios')
      .pipe(filter(usuarios => usuarios.usuarios !== null))
      .subscribe(usuarios =>
      {
        console.log(usuarios.usuarios);
        this.usuarios = usuarios.usuarios;
      });
  }

}
