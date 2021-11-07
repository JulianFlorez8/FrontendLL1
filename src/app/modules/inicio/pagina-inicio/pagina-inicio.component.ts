import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GramaticaService } from 'src/app/services/gramatica.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css'],
})
export class PaginaInicioComponent implements OnInit {
  json: string = 'Cargar Archivo JSON';
  uploadForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder, private service: GramaticaService) {}

  ngOnInit(): void {
    this.construirFormularioCarga();
  }

  construirFormularioCarga() {
    this.uploadForm = this.fb.group({
      file: [''],
    });
  }

  cargarArchivo() {
    const formData = new FormData();
    formData.append('file', this.fgUpload.file.value);
    //LLamar Servicio
    this.service.cargarArchivo(formData).subscribe(
      (data) => {
        console.log(data);
        //this.fgUpload.image.setValue(data.ruta);
      },
      (err) => {
        alert('Error al cargar el recibo');
      }
    );
  }

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
}
