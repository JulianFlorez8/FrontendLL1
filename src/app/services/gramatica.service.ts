import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service.config';
import { ArchivoModel } from 'src/app/modelos/archivo.model'
import { GramaticBDModel } from '../modelos/gramatica-bd.model';
import { CPBDModel } from '../modelos/conjunto-prediccionBD.model';
import { SiguientesBDModel } from '../modelos/siguientesBD.model';
import { PrimerosBDModel } from '../modelos/primerosBD.model';
@Injectable({
  providedIn: 'root'
})
export class GramaticaService {
  entity: String = 'CargarGramatica';
  entityGramatica: String = 'gramaticas';
  entitySiguientes: String = 'obtenersiguientes';
  entityPrimeros: String = 'obtenerprimeros';
  entityCP: String = 'obtenercp';
  
  constructor(
    private http: HttpClient
  ) {

  }
  cargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(`${ServiceConfig.BASE_URL}${this.entity}`, formData, {
      headers: new HttpHeaders({})
    })
  }
  ListarGramaticasValidas(): Observable<GramaticBDModel[]> {
    return this.http.get<GramaticBDModel[]>(`${ServiceConfig.BASE_URL}${this.entityGramatica}`);
  }
  obtenerCP(id: number): Observable<CPBDModel[]>{//Revisar retorno
    return this.http.get<CPBDModel[]>( `${ServiceConfig.BASE_URL}${this.entityCP}/${id}`)
  }
  obtenerSiguientes(id: number): Observable<SiguientesBDModel[]>{//Revisar retorno
    return this.http.get<SiguientesBDModel[]>( `${ServiceConfig.BASE_URL}${this.entitySiguientes}/${id}`)
  }
  obtenerPrimeros(id: number): Observable<PrimerosBDModel[]>{//Revisar retorno
    return this.http.get<PrimerosBDModel[]>( `${ServiceConfig.BASE_URL}${this.entityPrimeros}/${id}`)
  }
}
