export type DesignSystemComponentVariant = "default" | "compact" | "emphasis" | "neutral";
export interface DesignSystemAppearance {
    tokens: Record<string, string>;
    spacing: Record<string, number>;
    typography: Record<string, string>;
    motion: Record<string, string>;
    components: Record<string, DesignSystemComponentVariant>;
}
export interface DesignSystemContext {
    role?: string;
    phase?: string;
    locale?: string;
    device?: "display" | "tablet" | "kiosk";
}
export declare class DesignSystemAdapter {
    private static readonly defaultAppearance;
    resolveAppearance(context?: DesignSystemContext): DesignSystemAppearance;
    resolveComponentVariant(type: string, context?: DesignSystemContext): DesignSystemComponentVariant;
}
