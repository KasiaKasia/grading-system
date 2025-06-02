import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SignalGradeService } from '../services/signal-grade/signal-grade.service';
import { columnsPreview } from '../models/table-column-grade';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-preview-grade',
  standalone: true,
  imports: [MatTableModule, NgFor],
  templateUrl: './preview-grade.component.html',
  styleUrl: './preview-grade.component.scss'
})
export class PreviewGradeComponent {
  protected readonly signalGradeService = inject(SignalGradeService);
  protected readonly columnsPreview = columnsPreview
  protected readonly displayedColumns = columnsPreview.map(c => c.id);
}
