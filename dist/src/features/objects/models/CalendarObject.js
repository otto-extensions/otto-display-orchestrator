export function createCalendarObject() {
    return {
        id: "calendar-grid-main",
        type: "CalendarGrid",
        zoneId: "Footer",
        title: "Calendar",
        source: "otto-calendar",
        priority: 55,
        enabled: true,
        variant: "default",
        content: {
            events: [{ id: "evt-1", title: "Assembly", start: "09:30" }],
            dayLabel: "Today"
        }
    };
}
//# sourceMappingURL=CalendarObject.js.map