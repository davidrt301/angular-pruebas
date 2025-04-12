import { Component, inject, OnInit } from '@angular/core';
import { MetasComponent } from '../../design/metas/metas.component';
import { Metas } from '../../core/models/metas';
import { MetasService } from '../../services/metas.service';

@Component({
  selector: 'app-listar-metas',
  imports: [MetasComponent],
  templateUrl: './listar-metas.component.html',
  styleUrl: './listar-metas.component.scss'
})
export class ListarMetasComponent implements OnInit {
  
  servicioCursos = inject(MetasService);
  metas: Metas[]
  listaDeMetasDeBack?: Metas[];
  constructor() {
      this.metas = this.servicioCursos.getMetas()
  }
  ngOnInit(): void {
    this.servicioCursos.obtenerMetasBack().then((valorObtenido:Metas[])=>{
      this.listaDeMetasDeBack = valorObtenido;
    })
  }

}
