import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueva',
  templateUrl: './prueva.component.html',
  styleUrl: './prueva.component.css'
})
export class PruevaComponent implements OnInit {

  listaHecho : any = [] = [];
  listaPendientes : any = [] = [];
  textoInput: string = '' ;
  ultimaModificacion!: Date;

  constructor() { }

  ngOnInit(): void {
  }
  agregar(): void  {
    if (this.textoInput.trim() !== '') {
      const nuevaTarea = {
          hecho: false , 
          valor : this.textoInput,
        }
        this.listaPendientes.push(nuevaTarea);
        this.textoInput = '';
        this.ultimaModificacion = new Date();    
    }
  

  }
  setHecho(index: number ): void {
    let tarea = this.listaPendientes[index]
    this.listaPendientes.splice(index,1);
    this.listaHecho.push(tarea);
    this.ultimaModificacion = new Date();
  }
  
  setMover(index: number ): void {
    let tarea = this.listaHecho[index]
    this.listaHecho.splice(index,1);
    this.listaPendientes.push(tarea);
    this.ultimaModificacion = new Date();
  }
  
  setBorrar(type:string): void {
    if (type == 'P') {
      this.listaPendientes = [];
    } else {
      this.listaHecho = []
    }
    this.ultimaModificacion = new Date();

}
setTime(type: Date) : void {
  this.ultimaModificacion = new Date();
}



}

  // Crear funcion para cachar el check
  // Crear funcion para sacar de la listaPendiente y agregar en listHechos
  //  Como llenar una lista 






