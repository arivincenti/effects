import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as UsuarioActions from '../../store/actions/usuario.actions';
import { Subscription } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy
{

  usuario: UsuarioModel;
  subscription: Subscription = new Subscription();
  usuarioSubscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit()
  {
    this.subscription = this.activatedRoute.params.subscribe(params =>
    {
      const id = params['id'];
      console.log(id);

      this.store.dispatch(UsuarioActions.cargarUsuario({ id }));

      this.usuarioSubscription = this.store.select(state => state.usuario.usuario)
        .subscribe(usuario =>
        {
          this.usuario = usuario;
          console.log(this.usuario);
        });
    });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
    this.usuarioSubscription.unsubscribe();
  }

}
