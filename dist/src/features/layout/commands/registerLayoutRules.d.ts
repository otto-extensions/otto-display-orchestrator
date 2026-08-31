import type { LayoutRule } from "../models/LayoutRule.js";
export declare const REGISTER_LAYOUT_RULES_COMMAND_ID = "display.layout.register.rules";
export interface RegisterLayoutRulesInput {
    rules: LayoutRule[];
}
export interface RegisterLayoutRulesResult {
    registered: number;
    ids: string[];
}
export declare function registerLayoutRules(input: RegisterLayoutRulesInput): Promise<RegisterLayoutRulesResult>;
