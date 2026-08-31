export type LayoutZoneId = "TopBar" | "LeftColumn" | "RightColumn" | "Footer" | "FullscreenOverlay";
export type LayoutZoneKind = "header" | "sidebar" | "content" | "footer" | "overlay";
export interface LayoutZone {
    id: LayoutZoneId;
    name: string;
    kind: LayoutZoneKind;
    priority: number;
    visible: boolean;
    order: number;
    allowedObjectTypes: string[];
    minWidth?: number;
    maxWidth?: number;
}
export declare function createDefaultLayoutZones(): LayoutZone[];
