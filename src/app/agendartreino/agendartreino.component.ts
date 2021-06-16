import { Component, OnInit } from '@angular/core';
import { AgendarTreino } from './agendartreino.module';

import {default as NProgress} from 'nprogress'
import { AgendartreinoService } from './agendartreino.service';
import { element } from 'protractor';

@Component({
  selector: 'app-agendartreino',
  templateUrl: './agendartreino.component.html',
  styleUrls: ['./agendartreino.component.css']
})
export class AgendartreinoComponent implements OnInit {

  agendart = new   AgendarTreino();
  constructor(private treinoagservice : AgendartreinoService) { }

  ngOnInit() {
   
    this.treinoagservice.gettreinoList().subscribe(data => {
      this.agendart = data
      //this.total = data.totalElements;
    });
  }



 /* getStudents(): void {
    this.services.getStudents()
                 .subscribe(
                    data => this._students = data.alunos,
                    error => console.log("Student Service Error: " + error),
                    () => console.log('Done.')
                 )
}  
*/







  salvarAgTreino() {


    
      this.treinoagservice.salvarTreino(this.agendart).subscribe(data => { /*Salvando um novo User */
        this.novo();
        console.info("Gravou User: " + data);
      });
    }
  
    novo() {
      //this.agendart = new AgendarTreino();
     
    }


}
