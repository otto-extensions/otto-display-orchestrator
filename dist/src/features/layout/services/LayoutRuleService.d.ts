import type { LayoutRule } from "../models/LayoutRule.js";
export interface LayoutRuleResolution {
    appliedRules: LayoutRule[];
    conflicts: string[];
}
export declare class LayoutRuleService {
    resolveRules(rules: LayoutRule[]): LayoutRuleResolution;
}
