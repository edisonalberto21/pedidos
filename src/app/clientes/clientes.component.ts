import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre:string;
  apellido:string;
  edad:number;
}

interface Productos{
  nombre:string;
  precio:number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  //clientes:Array<Clientes> = new Array<Clientes>()
  //productos:Array<Productos> = new Array<Productos>();
  constructor() { }

  ngOnInit(): void {
  /* this.clientes.push({
      nombre:"Edison",
      apellido: "Giraldo",
      edad:37
     
    },
    {
      nombre:"Sebastian",
      apellido: "Giraldo",
      edad:12
     
    },
    {
      nombre:"Maria",
      apellido: "Giraldo",
      edad:6
     
    }
    )*/
  }

  guardarCliente(){
    let clientesAgregar:Array<Clientes> = new Array<Clientes>()
    clientesAgregar.push({
      nombre:"Dolly",
      apellido: "Restrepo",
      edad:6
    },
    {
      nombre:"Juan",
      apellido: "Restrepo",
      edad:16
    }
    )
   //localStorage.setItem("Clientes",JSON.stringify(this.clientes));
   localStorage.setItem("Clientes",JSON.stringify(clientesAgregar));
  }

  /*leerClientes(){

   this.clientes = JSON.parse(localStorage.getItem("Clientes"))
   this.productos = JSON.parse(localStorage.getItem("Productos"))
   console.log(this.clientes)
   console.log(this.productos)
  }*/

  eliminarClientes(){
    localStorage.removeItem("Clientes")
  }

  eliminarTodos(){
    localStorage.clear()
  }

  get clientesLocales(): Clientes[]{
    let clientesLocalStorage:Clientes[] =JSON.parse(localStorage.getItem("Clientes"))
    if(clientesLocalStorage == null){
      return new Array<Clientes>();
    }
    return clientesLocalStorage
  }

  get productosLocales(): Productos[]{
    let clientesLocalStorage:Productos[] =JSON.parse(localStorage.getItem("Productos"))
    if(clientesLocalStorage == null){
      return new Array<Productos>();
    }
    return clientesLocalStorage
  }
}
