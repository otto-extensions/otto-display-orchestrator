import type { DisplayObject } from "../../layout/models/DisplayObject.js";
export interface HomeworkObject extends DisplayObject {
    type: "HomeworkPanel";
    content: {
        assignments: Array<{
            id: string;
            title: string;
            due: string;
            subject: string;
        }>;
        urgentCount?: number;
    };
}
export declare function createHomeworkObject(): HomeworkObject;
