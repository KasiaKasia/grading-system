export interface GradeThreshold {
    readonly id: string;
    minPercentage: number;
    maxPercentage?: number|null;
    symbolicGrade: string;
    descriptiveGrade?: string;
}
