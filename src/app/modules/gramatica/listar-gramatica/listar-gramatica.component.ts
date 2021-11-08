import { Component, OnInit } from '@angular/core';
import { GramaticaService } from 'src/app/services/gramatica.service';

@Component({
  selector: 'app-listar-gramatica',
  templateUrl: './listar-gramatica.component.html',
  styleUrls: ['./listar-gramatica.component.css']
})
export class ListarGramaticaComponent implements OnInit {

  constructor(private gramaticaService: GramaticaService) { }
  ELEMENT_DATA: any[] = [];
  contador:number=0;
  ngOnInit(): void {
     this.gramaticaService.ListarGramaticasValidas().subscribe(
      (data) => {
        this.gramaticas=data; 
        this.obtenerContador();
      },
      (err) => console.log
    );
  }
  obtenerContador(){
    this.gramaticaService.obtenerContador().subscribe(
      (data) => {
        this.contador=data.count;
        console.log(data.count);
        

      },
      (err) => console.log
    );
  }
  displayedColumns: string[] = [ 'NoTerminal', 'Tipo'];
  gramaticas = this.ELEMENT_DATA;
 
}
