import { DesignSystemAdapter } from "../features/layout/adapters/DesignSystemAdapter.js";
export function designSystemIntegration(options = {}) {
    const adapter = new DesignSystemAdapter();
    return adapter.resolveAppearance({
        role: options.role,
        phase: options.phase,
        locale: options.locale,
        device: "display"
    });
}
//# sourceMappingURL=design-system-integration.js.map