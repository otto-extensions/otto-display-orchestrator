import { DesignSystemAdapter } from "../adapters/DesignSystemAdapter.js";
export class LayoutCompilerService {
    designSystemAdapter = new DesignSystemAdapter();
    compile(options) {
        const role = options.role ?? "student";
        const phase = options.phase ?? "normal";
        const zones = [...options.zones].sort((a, b) => a.order - b.order);
        const objects = [...options.objects]
            .filter((object) => object.enabled)
            .sort((a, b) => b.priority - a.priority);
        const appearance = this.designSystemAdapter.resolveAppearance({ role, phase });
        return {
            version: "1.0.0",
            generatedAt: new Date().toISOString(),
            role,
            phase,
            zones,
            objects,
            appearance,
            metadata: {
                source: "otto-display-orchestrator",
                deterministic: true,
                strategy: "rule-priority-and-phase-override"
            }
        };
    }
}
//# sourceMappingURL=LayoutCompilerService.js.map