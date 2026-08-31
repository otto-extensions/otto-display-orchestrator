import type { DisplayObject } from "../../layout/models/DisplayObject.js";
export declare const REGISTER_DISPLAY_OBJECTS_COMMAND_ID = "display.objects.register";
export interface RegisterDisplayObjectsInput {
    objects: DisplayObject[];
}
export interface RegisterDisplayObjectsResult {
    registered: number;
    ids: string[];
}
export declare function registerDisplayObjects(input: RegisterDisplayObjectsInput): Promise<RegisterDisplayObjectsResult>;
