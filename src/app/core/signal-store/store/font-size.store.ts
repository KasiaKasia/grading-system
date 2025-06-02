import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { ColorTheme, FontSize } from '../../settings-wcag/settings-wcag';
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


interface AppState {
  fontSize: number;
  currentColor: ColorTheme;
}

const initialState: AppState = {
  fontSize: FontSize.FONTSIZE_14,
  currentColor: ColorTheme.WHITE
};

export const UiSettingsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, document = inject(DOCUMENT)) => {
    document.body.style.fontSize = `${initialState.fontSize}px`;
    document.body.style.setProperty('--main-font-size', `${initialState.fontSize}px`);
    document.body.style.setProperty('--main-color', initialState.currentColor);
    
    return {
      setFontSize(fontSize: FontSize): void {
        patchState(store, { fontSize });
        document.body.style.fontSize = `${fontSize}px`;
        document.body.style.setProperty('--main-font-size', `${fontSize}px`);       
      },
      
      toggleContrast(): void {
        const currentColor = getComputedStyle(document.body).getPropertyValue('--main-color').trim();
        const newColor = currentColor === ColorTheme.YELLOW ? ColorTheme.WHITE : ColorTheme.YELLOW;
        
        patchState(store, { currentColor: newColor });
        document.body.style.setProperty('--main-color', newColor);
        document.body.style.backgroundColor = newColor;
      },
      
      getCurrentColor(): ColorTheme {
        return store.currentColor();
      }
    };
  })
);
 