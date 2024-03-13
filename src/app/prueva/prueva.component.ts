import { Component, OnInit } from '@angular/core';
import { Tarea } from '../model/Tarea';

@Component({
  selector: 'app-prueva',
  templateUrl: './prueva.component.html',
  styleUrl: './prueva.component.css'
})
export class PruevaComponent implements OnInit {

  listaPendientes : Tarea[]  = [];
  listaHecho : Tarea[] = [];
  textoInput: string = '' ;
  ultimaModificacion!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  agregar(): void  {
    if (this.textoInput.trim() !== '') {

        this.listaPendientes.push(
          {
          hecho: false , 
          valor: this.textoInput,
          fecha: new Date()
          }
        );
        this.textoInput = '';
        this.setTime()
    }
  }
  setHecho(index: number ): void {
    let tarea = this.listaPendientes[index]
    this.listaPendientes.splice(index,1);
    this.listaHecho.push(tarea);
    this.setTime();
  }
  
  setMover(index: number ): void {
    let tarea = this.listaHecho[index]
    this.listaHecho.splice(index,1);
    this.listaPendientes.push(tarea);
    this.setTime()

  }

  setBorrar(type:string): void {
    if (type == 'P') {
      this.listaPendientes = [];
    } else {
      this.listaHecho = []
    }
    this.setTime()

  }
  
  setTime() : void {
    this.ultimaModificacion = new Date();
  }
}

  






