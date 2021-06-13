import { Component, OnInit } from '@angular/core';
import {default as NProgress} from 'nprogress'
import { Membro } from './membro.module';
import { MembroService } from './membro.service';



@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent implements OnInit {
  membros : Membro[]
  constructor(private membrosService: MembroService) { }

  ngOnInit() {
    NProgress.start()
  	this.membrosService.membros()
      .subscribe(membros => this.membros = membros)
    NProgress.done()


  }

}
