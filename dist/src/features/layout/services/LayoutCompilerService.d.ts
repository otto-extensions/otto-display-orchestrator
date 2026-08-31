import { DesignSystemAdapter } from "../adapters/DesignSystemAdapter.js";
import type { DisplayObject } from "../models/DisplayObject.js";
import type { LayoutRule } from "../models/LayoutRule.js";
import type { LayoutZone } from "../models/LayoutZone.js";
export interface LayoutCompilerOptions {
    rules: LayoutRule[];
    zones: LayoutZone[];
    objects: DisplayObject[];
    role?: string;
    phase?: string;
}
export interface CompiledLayoutDocument {
    version: string;
    generatedAt: string;
    role: string;
    phase: string;
    zones: LayoutZone[];
    objects: DisplayObject[];
    appearance: ReturnType<DesignSystemAdapter["resolveAppearance"]>;
    metadata: {
        source: "otto-display-orchestrator";
        deterministic: boolean;
        strategy: string;
    };
}
export declare class LayoutCompilerService {
    private readonly designSystemAdapter;
    compile(options: LayoutCompilerOptions): CompiledLayoutDocument;
}
