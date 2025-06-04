import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SignalGradeService } from '../services/signal-grade/signal-grade.service';
import { columnsPreview } from '../models/table-column-grade';

@Component({
  selector: 'app-preview-grade',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './preview-grade.component.html',
})
export class PreviewGradeComponent {
  protected readonly signalGradeService = inject(SignalGradeService);
  protected readonly columnsPreview = columnsPreview
  protected readonly displayedColumns = columnsPreview.map(c => c.id);
}
