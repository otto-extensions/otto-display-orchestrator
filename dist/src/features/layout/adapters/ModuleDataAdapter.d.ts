export interface ScheduleSnapshot {
    periodName?: string;
    nextEvent?: string;
    currentDay?: string;
}
export interface CalendarSnapshot {
    events: Array<Record<string, unknown>>;
    todayLabel?: string;
}
export interface AssignmentSnapshot {
    items: Array<Record<string, unknown>>;
    urgentCount: number;
}
export interface AuthSnapshot {
    role?: string;
    displayName?: string;
    isAuthenticated: boolean;
}
export interface ModuleDataContext {
    role?: string;
    date?: string;
    phase?: string;
}
export interface ModuleDataSnapshot {
    schedule: ScheduleSnapshot;
    calendar: CalendarSnapshot;
    assignments: AssignmentSnapshot;
    auth: AuthSnapshot;
    generatedAt: string;
}
export declare class ModuleDataAdapter {
    load(context?: ModuleDataContext): Promise<ModuleDataSnapshot>;
}
