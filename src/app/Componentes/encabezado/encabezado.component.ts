import { Component, OnInit } from '@angular/core';
import { PofolioService } from 'src/app/servicios/pofolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit { 
miPofolio:any;
constructor(private datosPofolio:PofolioService) {}

  ngOnInit(): void {
   this.datosPofolio.obtenerDatos().subscribe(data =>{
    console.log(data);
     this.miPofolio=data;
   });
  }
}

