import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  json:string="Cargar Archivo JSON";
  constructor() { }

  ngOnInit(): void {
  }
  cambio(e: any) {
    
    if (e.target.value.split("\\")[2]) {
      
      this.json=e.target.value.split("\\")[2];
    }else{
     this.json="Cargar Archivo JSON"
      
    }


  }
}
