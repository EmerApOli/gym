import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handler';
import { Membro } from './membro.module';

@Injectable()
export class MembroService {

  constructor(private http: Http){}


  getmembroList(): Observable<any> {
    return this.http.get('http://localhost:3000/membros')
    .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
  //gettreinoList(): Observable<AgendarTreino> {
   // return this.http.get('http://localhost:3000/agendatreino')
   // .map(response => response.json())
   //   .catch(ErrorHandler.handleError)
  //}
  

}
