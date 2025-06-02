export interface GradeThreshold {
    readonly id: string;
    minPercentage: number;
    maxPercentage?: number;
    symbolicGrade: string;
    descriptiveGrade?: string;
}
