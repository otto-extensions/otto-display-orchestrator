export class PhaseRuleService {
    resolvePhase(rules, currentTime = "09:30") {
        const now = currentTime;
        const applicable = rules.filter((rule) => rule.enabled && now >= rule.startTime && now <= rule.endTime);
        const activePhase = applicable[0]?.name ?? "normal";
        const overrides = Object.assign({}, ...(applicable.map((rule) => rule.zoneOverrides ?? {})));
        return {
            activePhase,
            applicableRules: applicable,
            overrides
        };
    }
}
//# sourceMappingURL=PhaseRuleService.js.map