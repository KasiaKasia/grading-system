import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { Settings } from '../../../core/config/settings';
import { HttpClient } from '@angular/common/http';
import { map, } from 'rxjs';
import { ResponseGrade } from '../../../core/models/response';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GradeThreshold } from '../../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private httpClient = inject(HttpClient);
  public gradesSignal = signal<GradeThreshold[]>([]);
  private destroyRef = inject(DestroyRef);

  constructor() {
   // this.loadGrades();
  }

  private loadGrades() {
    this.httpClient.get<ResponseGrade>(`${Settings.API_GRADES}`)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map(res => res.respons ? res.respons as GradeThreshold[] : [])
      )
      .subscribe({
        next: (grades) => this.gradesSignal.set(grades),
        error: (err) => {
          this.handleError(err);
        }
      });
  }
  private handleError(error: any) {
    console.error('Błąd w GradeService:', error);

    if (error.code === 'NOT_FOUND') {
      console.error(`Nie znaleziono endpointu grades: ${Settings.API_GRADES}`);
    }
    else if (error.code === 'NETWORK_ERROR') {
      console.error('Problem z połączeniem do serwera');
    }
    else {
      console.error('Wystąpił nieoczekiwany błąd');
    }

    this.gradesSignal.set([]);
  }
}
