export type LayoutRuleType = "time-based" | "role-based" | "phase-based" | "event-based";
export type LayoutRuleScope = "global" | "role" | "phase" | "event" | "time";
export type LayoutRuleOperator = "equals" | "in" | "gt" | "lt" | "contains";

export interface LayoutRuleCondition {
  field: string;
  operator: LayoutRuleOperator;
  value: string | number | boolean | Array<string | number>;
}

export interface LayoutRule {
  id: string;
  name: string;
  type: LayoutRuleType;
  scope: LayoutRuleScope;
  enabled: boolean;
  priority: number;
  zoneId: "TopBar" | "LeftColumn" | "RightColumn" | "Footer" | "FullscreenOverlay";
  objectType: DisplayObjectType;
  conditions: LayoutRuleCondition[];
  fallback?: string;
}

export type DisplayObjectType =
  | "AnnouncementList"
  | "HomeworkPanel"
  | "WeatherTile"
  | "CalendarGrid"
  | "Clock"
  | "StatusBadge";

export class LayoutRuleDefinition implements LayoutRule {
  id: string;
  name: string;
  type: LayoutRuleType;
  scope: LayoutRuleScope;
  enabled: boolean;
  priority: number;
  zoneId: "TopBar" | "LeftColumn" | "RightColumn" | "Footer" | "FullscreenOverlay";
  objectType: DisplayObjectType;
  conditions: LayoutRuleCondition[];
  fallback?: string;

  constructor(input: LayoutRule) {
    this.id = input.id;
    this.name = input.name;
    this.type = input.type;
    this.scope = input.scope;
    this.enabled = input.enabled;
    this.priority = input.priority;
    this.zoneId = input.zoneId;
    this.objectType = input.objectType;
    this.conditions = input.conditions;
    this.fallback = input.fallback;
  }
}
