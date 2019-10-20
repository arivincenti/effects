import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService
{

  private URL: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers()
  {
    //`${URL}/users`
    //'https://reqres.in/api/users'

    return this.http.get('https://reqres.in/api/users')
      .pipe(map((resp: any) =>
      {
        return resp.data;
      }));
  }

  getUser(id: string)
  {
    return this.http.get(`https://reqres.in/api/users/${id}`)
      .pipe(map(resp =>
      {
        return resp['data'];
      }));
  }
}
