import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SignalGradeService } from '../services/signal-grade/signal-grade.service';
import { GradeThreshold } from '../models/grade';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../shared/component/button/button.component';
import { ActionTypeGrade } from '../../core/settings-wcag/settings-wcag';
import { columns as columns } from '../models/table-column-grade';
import { NgFor, NgIf } from '@angular/common';
import { IconComponent } from '../../shared/component/icon/icon.component';


@Component({
  selector: 'app-configuration-grade',
  standalone: true,
  imports: [
    MatTableModule, MatFormFieldModule, MatInputModule,
    IconComponent, ButtonComponent,
    NgFor, NgIf,
    FormsModule],
  templateUrl: './configuration-grade.component.html',
  styleUrl: './configuration-grade.component.scss'
})
export class ConfigurationGradeComponent {
  ActionTypeGrade = ActionTypeGrade;
  signalGradeService = inject(SignalGradeService);
  columns = columns;
  displayedColumns = columns.map(c => c.id);


  onRemoveGrade(id: string, event: MouseEvent): void {
    event.stopPropagation();
    this.signalGradeService.removeGrade(id);
  }

  onRowClick(grade: GradeThreshold): void {
    this.signalGradeService.selectedGrade.set({ ...grade });
    this.signalGradeService.isAddingMode.set(false);
  }
}
