import { Component, inject } from '@angular/core';
import { MetasComponent } from '../../design/metas/metas.component';
import { Metas } from '../../core/models/metas';
import { MetasService } from '../../services/metas.service';

@Component({
  selector: 'app-listar-metas',
  imports: [MetasComponent],
  templateUrl: './listar-metas.component.html',
  styleUrl: './listar-metas.component.scss'
})
export class ListarMetasComponent {
  
  servicioCursos = inject(MetasService);
  metas: Metas[]
  constructor() {
      this.metas = this.servicioCursos.getMetas()
  }

}
