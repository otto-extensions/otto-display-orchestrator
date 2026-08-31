import type { LayoutZoneId } from "./LayoutZone.js";
export type DisplayObjectType = "AnnouncementList" | "HomeworkPanel" | "WeatherTile" | "CalendarGrid" | "Clock" | "StatusBadge";
export interface DisplayObject {
    id: string;
    type: DisplayObjectType;
    zoneId: LayoutZoneId;
    title?: string;
    source: string;
    priority: number;
    enabled: boolean;
    variant?: string;
    content?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}
export declare class DisplayObjectInstance implements DisplayObject {
    id: string;
    type: DisplayObjectType;
    zoneId: LayoutZoneId;
    title?: string;
    source: string;
    priority: number;
    enabled: boolean;
    variant?: string;
    content?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
    constructor(input: DisplayObject);
}
