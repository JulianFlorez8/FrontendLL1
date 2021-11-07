import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FrontendLL1';
  uploadForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

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
    /**
    this.servicioSubida.cargarRecibo(formData).subscribe(
      (data) => {
        this.fgv.image.setValue(data.filename);
      },
      (err) => {
        alert('Error al cargar el recibo');
      }
    );
    */
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.fgUpload.file.setValue(f);
    }
  }

  get fgUpload() {
    return this.uploadForm.controls;
  }
}
