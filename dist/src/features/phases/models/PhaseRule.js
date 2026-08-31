export class PhaseRuleDefinition {
    id;
    name;
    startTime;
    endTime;
    zoneOverrides;
    allowFullscreenOverlay;
    enabled;
    constructor(input) {
        this.id = input.id;
        this.name = input.name;
        this.startTime = input.startTime;
        this.endTime = input.endTime;
        this.zoneOverrides = input.zoneOverrides ?? {};
        this.allowFullscreenOverlay = input.allowFullscreenOverlay ?? false;
        this.enabled = input.enabled;
    }
}
//# sourceMappingURL=PhaseRule.js.map