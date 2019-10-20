import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as UsuariosActions from 'src/app/store/actions/usuarios.actions';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy
{

  usuarios: Observable<UsuarioModel[]>;
  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) { }

  ngOnInit()
  {
    this.store.dispatch(UsuariosActions.cargarUsuarios());
    
    this.usuarios = this.store.select(store => store.usuarios.usuarios);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
