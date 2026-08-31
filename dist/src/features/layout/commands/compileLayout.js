import { commandService } from "../../../integration/csl-registration.js";
import { LayoutCompilerService } from "../services/LayoutCompilerService.js";
import { createDefaultLayoutZones } from "../models/LayoutZone.js";
export const COMPILE_LAYOUT_COMMAND_ID = "display.layout.compile";
export async function compileLayout(input) {
    const service = new LayoutCompilerService();
    return service.compile({
        rules: input.rules,
        objects: input.objects,
        zones: createDefaultLayoutZones(),
        role: input.role,
        phase: input.phase
    });
}
commandService.register(COMPILE_LAYOUT_COMMAND_ID, async (input) => compileLayout(input));
//# sourceMappingURL=compileLayout.js.map