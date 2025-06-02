import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'grade',
    pathMatch: 'full'
}, {
    path: 'grade',
    loadChildren: () => import('./grade/grade.module').then(m => m.GradeModule)
}, {
    path: '404',
    component: NotFoundComponent
}, {
    path: '**',
    redirectTo: '404'
}];

