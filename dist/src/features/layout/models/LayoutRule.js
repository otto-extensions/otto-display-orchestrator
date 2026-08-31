export class LayoutRuleDefinition {
    id;
    name;
    type;
    scope;
    enabled;
    priority;
    zoneId;
    objectType;
    conditions;
    fallback;
    constructor(input) {
        this.id = input.id;
        this.name = input.name;
        this.type = input.type;
        this.scope = input.scope;
        this.enabled = input.enabled;
        this.priority = input.priority;
        this.zoneId = input.zoneId;
        this.objectType = input.objectType;
        this.conditions = input.conditions;
        this.fallback = input.fallback;
    }
}
//# sourceMappingURL=LayoutRule.js.map