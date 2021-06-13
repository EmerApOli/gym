import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handler';
import { Membro } from './membro.module';

@Injectable()
export class MembroService {

  constructor(private http: Http){}

  membros(): Observable<Membro[]> {
    return this.http.get('http://localhost:3000/membro')
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
