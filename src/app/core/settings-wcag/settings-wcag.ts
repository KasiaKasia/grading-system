export enum FontSize {
    FONTSIZE_14 = 14,
    FONTSIZE_22 = 22,
    FONTSIZE_28 = 28
}

export enum ColorTheme {
  WHITE = 'white',
  YELLOW = 'rgb(255, 234, 0)'
}

export const LINE_HEIGHT_MIN: string = '1.5';
export const LINE_HEIGHT_MAX: string = '2';

export const LETTER_SPACING_MIN: string = '0.12';
export const LETTER_SPACING_MAX: string = '0.14';

export enum UIActionType {
    FontSize = 'fontSize',
    Color = 'color'
}

export enum ActionTypeGrade {
    SaveGrade = 'saveGrade',
    DeleteGrade = 'deleteGrade',
    CancelGrade = 'cancelGrade',
    AddGrade = 'addGrade',
    StartAddingGrade  = 'startAddingGrade'
}