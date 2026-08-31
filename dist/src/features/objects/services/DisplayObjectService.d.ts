import type { DisplayObject } from "../../layout/models/DisplayObject.js";
export interface DisplayObjectRegistry {
    get(): DisplayObject[];
}
export declare class DisplayObjectService implements DisplayObjectRegistry {
    private readonly registry;
    get(): DisplayObject[];
    add(object: DisplayObject): DisplayObject[];
    remove(id: string): DisplayObject[];
}
