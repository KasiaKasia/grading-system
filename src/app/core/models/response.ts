import { GradeThreshold } from "../../grade/models/grade";

export interface Response<T = any> {
    readonly success?: boolean;
    readonly code?: number;
    readonly message?: string;
    readonly respons?: T;
    readonly url?: string;
}

export type ResponseGrade = Response<GradeThreshold[]>;
