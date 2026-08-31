export function createDefaultLayoutZones() {
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
            id: "LeftColumn",
            name: "Left Column",
            kind: "sidebar",
            priority: 90,
            visible: true,
            order: 2,
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
            order: 3,
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
            order: 4,
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
            order: 5,
            allowedObjectTypes: ["AnnouncementList", "WeatherTile"],
            minWidth: 0,
            maxWidth: 100
        }
    ];
}
//# sourceMappingURL=LayoutZone.js.map