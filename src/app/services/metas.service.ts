import { Injectable } from '@angular/core';
import { Metas } from '../core/models/metas';
import { tick } from '@angular/core/testing';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class MetasService {

    metasMock : Metas[] = [];

    valoresLocalStore:any;
    constructor(private backendService: BackendService) {
        this.valoresLocalStore = localStorage.getItem('metas');
        if(this.valoresLocalStore === null){
            this.actualizarLocalStorage();
        }else{
            const metasCrudas = localStorage.getItem('metas');
            const metasParseadas = JSON.parse(metasCrudas!);
            this.metasMock = metasParseadas;
        }
     }
     actualizarLocalStorage(){
        const datosJSON = JSON.stringify(this.metasMock);
        localStorage.setItem('metas', datosJSON);  
     }

    getMetas(): Metas[] {/* obtenerMetas */
        return this.metasMock;
    }
    crearMetas(nuevaMeta: Metas): Metas[] {
        this.metasMock.push(nuevaMeta);
        this.actualizarLocalStorage();
        return this.metasMock;
    }

    actualizarMetas(metaActualizada: Metas) {
        const indice = this.metasMock.findIndex((meta) => meta.id === metaActualizada.id);
        if (indice === -1) {
            console.log('indice no existe')
        } else {
            this.metasMock[indice] = metaActualizada;
            this.actualizarLocalStorage();
        }
    }

    eliminarMetas(metaActualizada: Metas) {
        const indice = this.metasMock.findIndex((meta) => meta.id === metaActualizada.id);
        if (indice === -1) {
            console.log('indice no existe')
        } else {
            this.metasMock.splice(indice, 1);
            this.actualizarLocalStorage();
        }
    }

    async obtenerMetasBack(): Promise<Metas[]> {
        return this.backendService.leerMetas();
    }
}
