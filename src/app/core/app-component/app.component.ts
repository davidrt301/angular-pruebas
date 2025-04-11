import { Component } from '@angular/core';
/* import { RouterOutlet } from '@angular/router'; */
import { EncabezamientoComponent } from '../../layout/encabezamiento/encabezamiento.component';
import { PrincipalComponent } from '../../layout/principal/principal.component';
import { PieComponent } from '../../layout/pie/pie.component';

@Component({
  selector: 'app-root',
  imports: [EncabezamientoComponent, PrincipalComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-metas';
}
