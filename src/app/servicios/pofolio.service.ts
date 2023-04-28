import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PofolioService {

  constructor(){}

obtenerDatos(): void{
  console.log("El servicio Pofolio esta corriendo");
}
}
