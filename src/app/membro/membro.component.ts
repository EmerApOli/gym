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
  membros :  Membro[]
  
  constructor(private membrosService: MembroService) { }


  
  ngOnInit() {
   
    this.membrosService.getmembroList().subscribe(data => {
      this.membros = data;
      //this.total = data.totalElements;
    });
  }


  }
