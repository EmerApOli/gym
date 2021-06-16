import { Injectable } from '@angular/core';
import { AgendarTreino } from './agendartreino.module';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class AgendartreinoService {

  constructor(private http: Http) { }
 
 
  gettreinoList(): Observable<any> {
    return this.http.get('http://localhost:3000/agendatreino')
    .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }



  salvarTreino(agendatreino): Observable<any> {
    return this.http.post('http://localhost:3000/agendatreino',agendatreino)
  }

  getMembroList(): Observable<any> {
    return this.http.get('http://localhost:3000/membros');
  }

}
