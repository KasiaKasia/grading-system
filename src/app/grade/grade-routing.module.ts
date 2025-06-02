import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade/grade.component';
import { ConfigurationGradeComponent } from './configuration-grade/configuration-grade.component';
import { PreviewGradeComponent } from './preview-grade/preview-grade.component';

const routes: Routes = [{
  path: '',
  component: GradeComponent,
  children: [
    {
      path: 'configuration-grade',
      data: { title: 'Settings Grade' },
      component: ConfigurationGradeComponent
    }, {
      path: 'preview-grade',
      data: { title: 'Preview Grade' },
      component: PreviewGradeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule {}
