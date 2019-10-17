import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this._usuarioService.getUsers().subscribe( (data: any) => {
      console.log(data);
      this.usuarios = data;
    })
  }



}
