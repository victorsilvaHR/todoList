import { Component, OnInit } from '@angular/core';
import { Tarea } from '../model/Tarea';

@Component({
  selector: 'app-prueva',
  templateUrl: './prueva.component.html',
  styleUrl: './prueva.component.css'
})
export class PruevaComponent implements OnInit {

  listaTareas: Tarea[] = [];
  textoInput: string = '' ;
  ultimaModificacion!: Date;
  fondo= '/assets/todolist.png'


  constructor() { }

  ngOnInit(): void {
  }

  agregar(): void  {
    if (this.textoInput.trim() !== '') {
        this.listaTareas.push(
          {
          hecho: false , 
          valor: this.textoInput,
          fecha: new Date()
          }
        );
        this.textoInput = '';
        this.setTime();
    }
  }

  getPendientes() { 
    return this.listaTareas.filter(elemento => !elemento.hecho)
  }
  getHecho(){
    return this.listaTareas.filter(elemnto => elemnto.hecho)
  }


  setBorrar(type:string): void {
    if (type == 'P') {
      this.listaTareas = this.listaTareas.filter(elento => elento.hecho)

    }else {
      this.listaTareas = this.listaTareas.filter(elento => !elento.hecho)

    };
    this.setTime();

  }
  
  setTime() : void {
    this.ultimaModificacion = new Date();
  }
}

  






