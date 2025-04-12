import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Metas } from '../../core/models/metas';
import { MetasService } from '../../services/metas.service';
import { Router , RouterLink} from '@angular/router';

@Component({
  selector: 'app-nuevo',
  // imports: [ReactiveFormsModule], // Removed as it is not valid in @Component
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.scss'
})
export class NuevoComponent implements OnChanges {
  @Input()
  metasIng? : Metas;
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
  ngOnChanges(changes: SimpleChanges): void {
   if (this.metasIng){
    this.formularioDeMetas.setValue({
      id: this.metasIng.id,
      detalles: this.metasIng.detalles,
      periodo: this.metasIng.periodo,
      eventos: this.metasIng.eventos,
      icono: this.metasIng.icono,
      meta: this.metasIng.meta,
      plazo: this.metasIng.plazo,
      completado: this.metasIng.completado
    });
   }
  }

llenarMetaAEnviar():Metas{
  this.metaEnviar = {
    "id": this.metasIng ? this.metasIng!.id : Math.random().toString(),
    "detalles": this.formularioDeMetas.value.detalles!,
    "periodo": this.formularioDeMetas.value.periodo!,
    "eventos": this.formularioDeMetas.value.eventos!,
    "icono": this.formularioDeMetas.value.icono!,
    "meta": this.formularioDeMetas.value.meta!,
    "plazo": this.formularioDeMetas.value.plazo!,
    "completado": this.formularioDeMetas.value.completado!
    };
    return this.metaEnviar;
}

subirFormulario() {
  this.llenarMetaAEnviar()
  this.servicioCursos.crearMetas(this.llenarMetaAEnviar())
  this.router.navigate(['/lista']);
}
actualizarMeta(){
  this.llenarMetaAEnviar()
  this.servicioCursos.actualizarMetas(this.llenarMetaAEnviar())
  this.router.navigate(['/lista']);
}
eliminarMeta(){
  this.llenarMetaAEnviar()
  this.servicioCursos.eliminarMetas(this.llenarMetaAEnviar())
  this.router.navigate(['/lista']);
}
}
