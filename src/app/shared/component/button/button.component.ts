import { Component, inject, input } from '@angular/core';
import { ActionTypeGrade, UIActionType } from '../../../core/settings-wcag/settings-wcag';
import { MatButtonModule } from '@angular/material/button';
import { SignalGradeService } from '../../../grade/services/signal-grade/signal-grade.service';
import { UiSettingsStore } from '../../../core/signal-store/store/font-size.store';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  signalGradeService = inject(SignalGradeService);
  private uiSettingsStore = inject(UiSettingsStore);

  readonly actionType = input<UIActionType | ActionTypeGrade>()
  readonly value = input<any>();
  readonly buttonTitle = input<string>('')
  readonly ariaLabel = input<string>('')
  readonly type = input<string>('')
  readonly style = input<string>('')
  readonly isDisabled = input<boolean>(false)

  onClick(): void {

    switch (this.actionType()) {

      case ActionTypeGrade.CancelGrade:
        this.signalGradeService.selectedGrade.set(null);
        this.signalGradeService.isAddingMode.set(false);
        break;

      case ActionTypeGrade.SaveGrade:
        const grade = this.value();
        if (grade) {
          if (this.signalGradeService.isAddingMode()) {
            this.signalGradeService.addGrade(grade);
          } else {
            this.signalGradeService.updateGrade(grade);
          }
        }
        break;

      case ActionTypeGrade.StartAddingGrade:
        this.signalGradeService.startAdding();
        break;

      case UIActionType.FontSize:
        this.uiSettingsStore.setFontSize(this.value());
        break;

      case UIActionType.Color:
        this.uiSettingsStore.toggleContrast();
        break;
      default:
        console.warn('Nieznana akcja:', this.actionType());
    }
  }
}
