export class ModuleDataAdapter {
    async load(context = {}) {
        const now = new Date().toISOString();
        return {
            schedule: {
                periodName: "Period 2",
                nextEvent: "Lunch",
                currentDay: context.date ?? "2026-08-31"
            },
            calendar: {
                events: [{ title: "Team meeting", start: "09:00" }],
                todayLabel: "Today"
            },
            assignments: {
                items: [{ title: "Science lab", due: "Today" }],
                urgentCount: 1
            },
            auth: {
                role: context.role ?? "student",
                displayName: "Display Guest",
                isAuthenticated: true
            },
            generatedAt: now
        };
    }
}
//# sourceMappingURL=ModuleDataAdapter.js.map