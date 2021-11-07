import { ConjuntoPrediccionModel } from "./conjunto-prediccion.model";
import { PrimerosaModel } from "./primeros.model";
import { SiguientesModel } from "./siguientes.model";
import { VariableModel } from "./variable.model";

export class GramaticaModel {
    nombre?: string;
    variables: VariableModel[]=[];
    primeros: PrimerosaModel[]=[];
    siguientes: SiguientesModel[]=[];
    conjuntoPrediccion: ConjuntoPrediccionModel[]=[];
    es: boolean=true;
    constructor() { }
}

