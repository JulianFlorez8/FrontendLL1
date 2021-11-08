import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GramaticaService } from 'src/app/services/gramatica.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css'],
})
export class PaginaInicioComponent implements OnInit {
  json: string = 'Cargar Archivo JSON';
  todo: any = [];
  primeros: any = [];
  siguientes: any = [];
  prediccion: any = [];
  gramaticas: any = [];
  uploadForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private service: GramaticaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.construirFormularioCarga();
    this.service.ListarGramaticasValidas().subscribe(
      (data) => {
        this.gramaticas = data;
        console.log(this.gramaticas.length);
      },
      (err) => console.log
    );
  }

  construirFormularioCarga() {
    this.uploadForm = this.fb.group({
      file: [''],
    });
  }

  async cargarArchivo() {
    const formData = new FormData();
    formData.append('file', this.fgUpload.file.value);
    //LLamar Servicio
    this.service.cargarArchivo(formData).subscribe(
      (data) => {
        console.log(data);
        this.todo = data;
        this.primeros = this.todo.primeros;
        this.siguientes = this.todo.siguientes;
        this.prediccion = this.todo.conjuntoPrediccion;
        //this.fgUpload.image.setValue(data.ruta);
        if (this.todo.es == true) {
          this.router.navigate([
            '/gramatica/ver-gramatica/',
            this.gramaticas.length + 1,
          ]);
        } else {
          console.log('No es');
        }
      },
      (err) => {
        alert('Error al cargar el archivo');
      }
    );
  }

  async mostrarError() {}

  onFileSelect(event: any) {
    if (event.target.value.split('\\')[2]) {
      this.json = event.target.value.split('\\')[2];
    } else {
      this.json = 'Cargar Archivo JSON';
    }
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.fgUpload.file.setValue(f);
    }
  }

  get fgUpload() {
    return this.uploadForm.controls;
  }

  displayedColumns: string[] = ['NoTerminal', 'Tipo'];
}
