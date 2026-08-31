import type { PhaseRule } from "../models/PhaseRule.js";
export interface PhaseResolution {
    activePhase: string;
    applicableRules: PhaseRule[];
    overrides: Record<string, string[]>;
}
export declare class PhaseRuleService {
    resolvePhase(rules: PhaseRule[], currentTime?: string): PhaseResolution;
}
