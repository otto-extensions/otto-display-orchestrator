export function createHomeworkObject() {
    return {
        id: "homework-panel-main",
        type: "HomeworkPanel",
        zoneId: "LeftColumn",
        title: "Homework",
        source: "otto-assignments",
        priority: 80,
        enabled: true,
        variant: "emphasis",
        content: {
            assignments: [{ id: "h1", title: "Read chapter 7", due: "Today", subject: "English" }],
            urgentCount: 1
        }
    };
}
//# sourceMappingURL=HomeworkObject.js.map