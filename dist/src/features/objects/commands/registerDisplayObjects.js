import { commandService } from "../../../integration/csl-registration.js";
export const REGISTER_DISPLAY_OBJECTS_COMMAND_ID = "display.objects.register";
export async function registerDisplayObjects(input) {
    const ids = input.objects.map((object) => object.id);
    return {
        registered: ids.length,
        ids
    };
}
commandService.register(REGISTER_DISPLAY_OBJECTS_COMMAND_ID, async (input) => registerDisplayObjects(input));
//# sourceMappingURL=registerDisplayObjects.js.map