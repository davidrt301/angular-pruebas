import { Routes } from '@angular/router';
import { ListarMetasComponent } from '../../components/listar-metas/listar-metas.component';
import { NuevoComponent } from '../../components/nuevo/nuevo.component';

export const routes: Routes = [
    {
        path:'lista',
        component: ListarMetasComponent,
    },
    {
        path:'crear',
        component: NuevoComponent
    }
];
