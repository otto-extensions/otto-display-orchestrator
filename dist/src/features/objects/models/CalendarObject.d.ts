import type { DisplayObject } from "../../layout/models/DisplayObject.js";
export interface CalendarObject extends DisplayObject {
    type: "CalendarGrid";
    content: {
        events: Array<{
            id: string;
            title: string;
            start: string;
            end?: string;
        }>;
        dayLabel?: string;
    };
}
export declare function createCalendarObject(): CalendarObject;
