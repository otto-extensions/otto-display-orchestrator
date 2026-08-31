import { commandService } from "../../../integration/csl-registration.js";
import type { LayoutRule } from "../models/LayoutRule.js";

export const REGISTER_LAYOUT_RULES_COMMAND_ID = "display.layout.register.rules";

export interface RegisterLayoutRulesInput {
  rules?: LayoutRule[];
}

export interface RegisterLayoutRulesResult {
  registered: number;
  ids: string[];
}

export function getDefaultLayoutRules(): LayoutRule[] {
  return [
    {
      id: "layout-hallway-announcements",
      name: "Hallway announcements",
      type: "role-based",
      scope: "role",
      enabled: true,
      priority: 100,
      zoneId: "TopBar",
      objectType: "AnnouncementList",
      conditions: [{ field: "role", operator: "equals", value: "hallway" }],
      fallback: "default"
    },
    {
      id: "layout-sidewall-homework",
      name: "Sidewall homework",
      type: "role-based",
      scope: "role",
      enabled: true,
      priority: 100,
      zoneId: "LeftColumn",
      objectType: "HomeworkPanel",
      conditions: [{ field: "role", operator: "equals", value: "sidewall" }],
      fallback: "default"
    },
    {
      id: "layout-backwall-calendar",
      name: "Backwall calendar",
      type: "role-based",
      scope: "role",
      enabled: true,
      priority: 100,
      zoneId: "Footer",
      objectType: "CalendarGrid",
      conditions: [{ field: "role", operator: "equals", value: "backwall" }],
      fallback: "default"
    },
    {
      id: "layout-weather-current",
      name: "Weather current page",
      type: "role-based",
      scope: "role",
      enabled: true,
      priority: 200,
      zoneId: "Main",
      objectType: "WeatherTile",
      conditions: [{ field: "role", operator: "equals", value: "weather" }],
      fallback: "default"
    },
    {
      id: "layout-time-current",
      name: "Time current page",
      type: "role-based",
      scope: "role",
      enabled: true,
      priority: 200,
      zoneId: "Main",
      objectType: "Clock",
      conditions: [{ field: "role", operator: "equals", value: "time" }],
      fallback: "default"
    }
  ];
}

export async function registerLayoutRules(input: RegisterLayoutRulesInput): Promise<RegisterLayoutRulesResult> {
  const rules = input.rules ?? getDefaultLayoutRules();
  const ids = rules.map((rule) => rule.id);
  return {
    registered: ids.length,
    ids
  };
}

commandService.register<RegisterLayoutRulesInput, RegisterLayoutRulesResult>(
  REGISTER_LAYOUT_RULES_COMMAND_ID,
  async (input: RegisterLayoutRulesInput) => registerLayoutRules(input)
);
