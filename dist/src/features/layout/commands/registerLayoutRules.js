import { commandService } from "../../../integration/csl-registration.js";
export const REGISTER_LAYOUT_RULES_COMMAND_ID = "display.layout.register.rules";
export async function registerLayoutRules(input) {
    const ids = input.rules.map((rule) => rule.id);
    return {
        registered: ids.length,
        ids
    };
}
commandService.register(REGISTER_LAYOUT_RULES_COMMAND_ID, async (input) => registerLayoutRules(input));
//# sourceMappingURL=registerLayoutRules.js.map