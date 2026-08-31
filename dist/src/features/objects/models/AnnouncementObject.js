export function createAnnouncementObject() {
    return {
        id: "announcement-list-main",
        type: "AnnouncementList",
        zoneId: "TopBar",
        title: "Announcements",
        source: "otto-schedule",
        priority: 70,
        enabled: true,
        variant: "default",
        content: {
            items: [{ id: "a1", text: "Welcome to campus.", priority: "normal" }],
            maxItems: 4
        }
    };
}
//# sourceMappingURL=AnnouncementObject.js.map