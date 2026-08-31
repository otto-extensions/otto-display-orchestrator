import type { PhaseRule } from "../models/PhaseRule.js";
export declare const REGISTER_PHASE_RULES_COMMAND_ID = "display.phase.register";
export interface RegisterPhaseRulesInput {
    rules: PhaseRule[];
}
export interface RegisterPhaseRulesResult {
    registered: number;
    ids: string[];
}
export declare function registerPhaseRules(input: RegisterPhaseRulesInput): Promise<RegisterPhaseRulesResult>;
