import { createDefaultLayoutZones } from "../models/LayoutZone.js";
export class LayoutRuleService {
    resolveRules(rules) {
        const sorted = [...rules]
            .filter((rule) => rule.enabled)
            .sort((a, b) => b.priority - a.priority);
        const appliedRules = [];
        const conflicts = [];
        const seen = new Set();
        for (const rule of sorted) {
            if (seen.has(rule.id)) {
                conflicts.push(`Duplicate rule: ${rule.id}`);
                continue;
            }
            seen.add(rule.id);
            appliedRules.push(rule);
        }
        const zones = createDefaultLayoutZones();
        for (const rule of appliedRules) {
            const zone = zones.find((item) => item.id === rule.zoneId);
            if (!zone) {
                conflicts.push(`Unknown zone in rule: ${rule.id}`);
            }
        }
        return { appliedRules, conflicts };
    }
}
//# sourceMappingURL=LayoutRuleService.js.map