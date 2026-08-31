import { commandService } from "../../../integration/csl-registration.js";
export const REGISTER_PHASE_RULES_COMMAND_ID = "display.phase.register";
export async function registerPhaseRules(input) {
    const ids = input.rules.map((rule) => rule.id);
    return {
        registered: ids.length,
        ids
    };
}
commandService.register(REGISTER_PHASE_RULES_COMMAND_ID, async (input) => registerPhaseRules(input));
//# sourceMappingURL=registerPhaseRules.js.map