import { Component, OnInit } from '@angular/core';
import { AgendartreinoService } from '../agendartreino.service';
import { ActivatedRoute } from '@angular/router';
import { Membro } from '../../membro/membro.module';
import { AgendarTreino } from '../agendartreino.module';
import { environment } from '../../../environments/environment.prod';
import { MembroService } from '../../membro/membro.service';
@Component({
  selector: 'app-cad-agendatreino',
  templateUrl: './cad-agendatreino.component.html',
  styleUrls: ['./cad-agendatreino.component.css']
})
export class CadAgendatreinoComponent implements OnInit {
  cadagend = new AgendarTreino();
  membros : Membro[];
  constructor( private routeActive: ActivatedRoute,private treinoagservice : AgendartreinoService,
    private membroserv :MembroService, private instrutorservice :MembroService) { }

  ngOnInit() {
    
   
    this.membroserv.getmembroList().subscribe(data => {
      this.membros = data;

  })

}
salvarUser() {


  
    this.treinoagservice.salvarTreino(this.cadagend).subscribe(data => { /*Salvando um novo User */
      //this.novo();
      console.info("Gravou User: " + data);
    });
  }
}



