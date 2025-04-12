import { Injectable } from '@angular/core';
import { Metas } from '../core/models/metas';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly archivoLocalMetas = 'data/metas.json';
  private readonly archivoLocalMeta = 'data/meta.json';

  constructor() {  }

  async leerMetas(): Promise<Metas[]>{
    const response = await fetch(this.archivoLocalMetas);
    const metas:Metas[] = await response.json();
    return metas;
  }
  async leerMetaPorId(id:number): Promise<Metas>{
    const response = await fetch(this.archivoLocalMeta);
    const meta:Metas = await response.json();
    return meta;
  }
}
/* ng generate component carpeta/backend :comado de genrar componente 
ng g s services/backend: comando para generar servicio */
