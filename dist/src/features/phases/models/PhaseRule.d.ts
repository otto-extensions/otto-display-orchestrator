export type PhaseRuleName = "normal" | "chapel" | "assembly" | "fire-drill" | "event";
export interface PhaseRule {
    id: string;
    name: PhaseRuleName;
    startTime: string;
    endTime: string;
    zoneOverrides?: Record<string, string[]>;
    allowFullscreenOverlay?: boolean;
    enabled: boolean;
}
export declare class PhaseRuleDefinition implements PhaseRule {
    id: string;
    name: PhaseRuleName;
    startTime: string;
    endTime: string;
    zoneOverrides?: Record<string, string[]>;
    allowFullscreenOverlay?: boolean;
    enabled: boolean;
    constructor(input: PhaseRule);
}
