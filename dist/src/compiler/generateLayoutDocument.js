import { createDefaultLayoutZones } from "../features/layout/models/LayoutZone.js";
import { DesignSystemAdapter } from "../features/layout/adapters/DesignSystemAdapter.js";
export function generateLayoutDocument(input) {
    const designSystem = new DesignSystemAdapter();
    return {
        version: "1.0.0",
        timestamp: new Date().toISOString(),
        role: input.role ?? "student",
        phase: input.phase ?? "normal",
        zones: createDefaultLayoutZones(),
        objects: input.objects,
        rules: input.rules,
        appearance: designSystem.resolveAppearance({
            role: input.role ?? "student",
            phase: input.phase ?? "normal"
        })
    };
}
//# sourceMappingURL=generateLayoutDocument.js.map