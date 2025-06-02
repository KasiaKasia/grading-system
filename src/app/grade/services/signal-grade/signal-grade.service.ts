import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { GradeThreshold } from '../../models/grade';
import { GradeService } from '../observable-grade/grade.service';
import { gradeThreshold } from '../data/data';


@Injectable({
  providedIn: 'root'
})
export class SignalGradeService {

  gradeService = inject(GradeService)
  gradesSignal: WritableSignal<GradeThreshold[]> =signal(gradeThreshold) //signal(gradeThreshold); //this.gradeService.gradesSignal;
  selectedGrade = signal<GradeThreshold | null>(null);
  isAddingMode = signal(false);

  removeGrade(id: string): void {
    this.gradesSignal.update(grades =>
      grades.filter(grade => grade.id !== id)
    );
  }

  updateGrade(updatedGrade: GradeThreshold): void {
    this.gradesSignal.update(grades =>
      grades.map(grade => grade.id === updatedGrade.id ? updatedGrade : grade)
    );
    this.isAddingMode.set(false);
    this.selectedGrade.set(null);
  }
  startAdding(): void {
    this.isAddingMode.set(true);
    this.selectedGrade.set({
      id: '',
      symbolicGrade: '',
      minPercentage: 0,
      maxPercentage: undefined,
      descriptiveGrade: ''
    });
  }

  addGrade(newGrade: GradeThreshold): void { 

    this.gradesSignal.update(grades => [...grades, {
      ...newGrade,
      id: String.fromCharCode(Math.floor(Math.random() * 94))
    }]);
    this.resetForm();
  }

  resetForm(): void {
    this.isAddingMode.set(false);
    this.selectedGrade.set(null);
  }
}
