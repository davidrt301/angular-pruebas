import { Routes } from '@angular/router';
import { ListarMetasComponent } from '../../components/listar-metas/listar-metas.component';
import { NuevoComponent } from '../../components/nuevo/nuevo.component';
import { ModalComponent } from '../../components/modal/modal.component';

export const routes: Routes = [
    {
        path:'',
        title: 'Pagina Principal',
        component: ListarMetasComponent,
    },
    {
        path:'lista',
        title: 'Pagina Principal',
        component: ListarMetasComponent,
    },
    {
        path:'crear',
        title: 'Crear Nueva Meta',
        component: NuevoComponent
    },
    {
        path: 'editar',
        title: 'Crear Nueva Meta',
        component: ModalComponent
    }
];
