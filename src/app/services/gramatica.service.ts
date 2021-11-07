import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service.config';
import { ArchivoModel } from 'src/app/modelos/archivo.model'
@Injectable({
  providedIn: 'root'
})
export class GramaticaService {
  entity: String='CargarGramatica';
  constructor(
    private http: HttpClient
  ) { 
    
  }
  cargarArchivo(formData:FormData): Observable<ArchivoModel>{
    return this.http.post<ArchivoModel>( `${ServiceConfig.BASE_URL}${this.entity}`,formData, {
      headers: new HttpHeaders({})
  })
}
}
