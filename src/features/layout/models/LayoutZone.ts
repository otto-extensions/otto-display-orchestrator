export type LayoutZoneId = "TopBar" | "Main" | "LeftColumn" | "RightColumn" | "Footer" | "FullscreenOverlay";

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

export function createDefaultLayoutZones(): LayoutZone[] {
  return [
    {
      id: "TopBar",
      name: "Top Bar",
      kind: "header",
      priority: 100,
      visible: true,
      order: 1,
      allowedObjectTypes: ["Clock", "AnnouncementList", "WeatherTile"],
      minWidth: 0,
      maxWidth: 100
    },
    {
      id: "Main",
      name: "Main",
      kind: "content",
      priority: 95,
      visible: true,
      order: 2,
      allowedObjectTypes: ["AnnouncementList", "WeatherTile", "Clock"],
      minWidth: 30,
      maxWidth: 100
    },
    {
      id: "LeftColumn",
      name: "Left Column",
      kind: "sidebar",
      priority: 90,
      visible: true,
      order: 3,
      allowedObjectTypes: ["HomeworkPanel", "CalendarGrid", "AnnouncementList"],
      minWidth: 25,
      maxWidth: 35
    },
    {
      id: "RightColumn",
      name: "Right Column",
      kind: "sidebar",
      priority: 85,
      visible: true,
      order: 4,
      allowedObjectTypes: ["WeatherTile", "CalendarGrid"],
      minWidth: 25,
      maxWidth: 35
    },
    {
      id: "Footer",
      name: "Footer",
      kind: "footer",
      priority: 70,
      visible: true,
      order: 5,
      allowedObjectTypes: ["AnnouncementList", "CalendarGrid"],
      minWidth: 0,
      maxWidth: 100
    },
    {
      id: "FullscreenOverlay",
      name: "Fullscreen Overlay",
      kind: "overlay",
      priority: 120,
      visible: false,
      order: 6,
      allowedObjectTypes: ["AnnouncementList", "WeatherTile"],
      minWidth: 0,
      maxWidth: 100
    }
  ];
}
