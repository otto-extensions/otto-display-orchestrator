export class DisplayObjectInstance {
    id;
    type;
    zoneId;
    title;
    source;
    priority;
    enabled;
    variant;
    content;
    metadata;
    constructor(input) {
        this.id = input.id;
        this.type = input.type;
        this.zoneId = input.zoneId;
        this.title = input.title;
        this.source = input.source;
        this.priority = input.priority;
        this.enabled = input.enabled;
        this.variant = input.variant;
        this.content = input.content ?? {};
        this.metadata = input.metadata ?? {};
    }
}
//# sourceMappingURL=DisplayObject.js.map