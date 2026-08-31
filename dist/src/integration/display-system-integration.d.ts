export interface DisplaySystemContext {
    role?: string;
    phase?: string;
    time?: string;
}
export declare function buildDisplaySystemDocument(context?: DisplaySystemContext): Promise<{
    moduleData: import("../features/layout/adapters/ModuleDataAdapter.js").ModuleDataSnapshot;
    zones: import("../features/layout/models/LayoutZone.js").LayoutZone[];
    generatedAt: string;
    version: string;
    timestamp: string;
    role: string;
    phase: string;
    objects: import("../index.js").DisplayObject[];
    rules: import("../index.js").LayoutRule[];
    appearance: ReturnType<import("../index.js").DesignSystemAdapter["resolveAppearance"]>;
}>;
