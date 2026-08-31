import type { DisplayObject } from "../features/layout/models/DisplayObject.js";
import type { LayoutRule } from "../features/layout/models/LayoutRule.js";
export interface ValidationIssue {
    code: string;
    message: string;
    severity: "error" | "warning";
}
export interface ValidationResult {
    valid: boolean;
    issues: ValidationIssue[];
}
export declare function validateLayoutSpec(rules: LayoutRule[], objects: DisplayObject[]): ValidationResult;
