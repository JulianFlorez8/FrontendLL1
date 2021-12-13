import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GramaticaService } from 'src/app/services/gramatica.service';
@Component({
  selector: 'app-ver-gramatica',
  templateUrl: './ver-gramatica.component.html',
  styleUrls: ['./ver-gramatica.component.css'],
})
export class VerGramaticaComponent implements OnInit {
  recordId: string;
  primeros: any = [];
  siguientes: any = [];
  prediccion: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicio: GramaticaService
  ) {
    this.recordId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  
    this.obtenerPrimeros();
    this.obtenerSiguientes();
    this.obtenerPrediccion();
  }

  obtenerPrimeros() {
    this.servicio.obtenerPrimeros(Number(this.recordId)).subscribe(
      (data) => {
        this.primeros = data;
        console.log(data);
      },
      (err) => {
        console.log('No se encontro ');
      }
    );
  }

  obtenerSiguientes() {
    this.servicio.obtenerSiguientes(Number(this.recordId)).subscribe(
      (data) => {
        this.siguientes = data;
        console.log(data);
      },
      (err) => {
        console.log('No se encontro ');
      }
    );
  }

  obtenerPrediccion() {
    this.servicio.obtenerCP(Number(this.recordId)).subscribe(
      (data) => {
        this.prediccion = data;
        console.log(data);
      },
      (err) => {
        console.log('No se encontro ');
      }
    );
  }

  displayedColumns: string[] = ['NoTerminal', 'Tipo'];
}
