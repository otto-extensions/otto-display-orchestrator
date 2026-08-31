import type { DisplayObject } from "../../layout/models/DisplayObject.js";
export interface AnnouncementObject extends DisplayObject {
    type: "AnnouncementList";
    content: {
        items: Array<{
            id: string;
            text: string;
            priority: "low" | "normal" | "high";
        }>;
        maxItems?: number;
    };
}
export declare function createAnnouncementObject(): AnnouncementObject;
