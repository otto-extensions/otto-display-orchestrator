import type { DisplayObject } from "../features/layout/models/DisplayObject.js";
import type { LayoutRule } from "../features/layout/models/LayoutRule.js";
import { createDefaultLayoutZones } from "../features/layout/models/LayoutZone.js";
import { DesignSystemAdapter } from "../features/layout/adapters/DesignSystemAdapter.js";
export interface GeneratedLayoutDocument {
    version: string;
    timestamp: string;
    role: string;
    phase: string;
    zones: ReturnType<typeof createDefaultLayoutZones>;
    objects: DisplayObject[];
    rules: LayoutRule[];
    appearance: ReturnType<DesignSystemAdapter["resolveAppearance"]>;
}
export declare function generateLayoutDocument(input: {
    rules: LayoutRule[];
    objects: DisplayObject[];
    role?: string;
    phase?: string;
}): GeneratedLayoutDocument;
