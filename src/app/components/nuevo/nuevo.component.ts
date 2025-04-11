import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Metas } from '../../core/models/metas';
import { MetasService } from '../../services/metas.service';
import { Router , RouterLink} from '@angular/router';

@Component({
  // imports: [ReactiveFormsModule], // Removed as it is not valid in @Component
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.scss'
})
export class NuevoComponent {
  metaEnviar?: Metas;

  formularioDeMetas = new FormGroup({
    id: new FormControl(),
    detalles: new FormControl(),
    periodo: new FormControl(),
    eventos: new FormControl(),
    icono: new FormControl(),
    meta: new FormControl(),
    plazo: new FormControl(),
    completado: new FormControl()
});
frecuencias = ["dia","semana","mes","año"];
iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];

constructor(private servicioCursos: MetasService, private router: Router){}

subirFormulario() {
  this.metaEnviar = {
  "id": Math.random().toString(),
  "detalles": this.formularioDeMetas.value.detalles,
  "periodo": this.formularioDeMetas.value.periodo,
  "eventos": this.formularioDeMetas.value.eventos,
  "icono": this.formularioDeMetas.value.icono,
  "meta": this.formularioDeMetas.value.meta,
  "plazo": this.formularioDeMetas.value.plazo,
  "completado": this.formularioDeMetas.value.completado
  }
  this.servicioCursos.setMetas(this.metaEnviar);
  console.log(this.metaEnviar);
  this.router.navigate(['/lista']);
  /* console.log(this.formularioDeMetas.value.detalles)
  console.log(this.formularioDeMetas.value.periodo)
  console.log(this.formularioDeMetas.value.eventos)
  console.log(this.formularioDeMetas.value.icono)
  console.log(this.formularioDeMetas.value.meta)
  console.log(this.formularioDeMetas.value.plazo)
  console.log(this.formularioDeMetas.value.completado) */
}
}
