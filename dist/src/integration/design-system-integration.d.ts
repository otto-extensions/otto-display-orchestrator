export interface DesignSystemIntegrationOptions {
    role?: string;
    phase?: string;
    locale?: string;
}
export declare function designSystemIntegration(options?: DesignSystemIntegrationOptions): import("../features/layout/adapters/DesignSystemAdapter.js").DesignSystemAppearance;
