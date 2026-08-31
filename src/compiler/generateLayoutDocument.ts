import type { DisplayObject } from "../features/layout/models/DisplayObject.js";
import type { LayoutRule } from "../features/layout/models/LayoutRule.js";
import { createDefaultLayoutZones } from "../features/layout/models/LayoutZone.js";
import { DesignSystemAdapter } from "../features/layout/adapters/DesignSystemAdapter.js";
import {
  defaultOrchestratorSettings,
  type OrchestratorSettings
} from "../features/settings/models/OrchestratorSettings.js";

export interface GeneratedLayoutDocument {
  version: string;
  timestamp: string;
  role: string;
  phase: string;
  zones: ReturnType<typeof createDefaultLayoutZones>;
  objects: DisplayObject[];
  rules: LayoutRule[];
  appearance: ReturnType<DesignSystemAdapter["resolveAppearance"]>;
}

export function generateLayoutDocument(
  input: {
    rules: LayoutRule[];
    objects: DisplayObject[];
    role?: string;
    phase?: string;
    settings?: Partial<OrchestratorSettings>;
  }
): GeneratedLayoutDocument {
  const designSystem = new DesignSystemAdapter();
  const settings = {
    ...defaultOrchestratorSettings,
    ...(input.settings ?? {})
  };
  const enabledPages = new Set(settings.enabledPages ?? []);

  const pageToObjectTypes = {
    hallway: ["AnnouncementList", "HomeworkPanel", "CalendarGrid"],
    weather: ["WeatherTile"],
    time: ["Clock"]
  } as const;

  const enabledObjectTypes = new Set(
    Object.entries(pageToObjectTypes)
      .filter(([page]) => enabledPages.size === 0 || enabledPages.has(page))
      .flatMap(([, objectTypes]) => objectTypes)
  );
  const filteredObjects =
    enabledObjectTypes.size > 0
      ? input.objects.filter((object) => enabledObjectTypes.has(object.type))
      : input.objects;

  return {
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    role: input.role ?? "student",
    phase: input.phase ?? "normal",
    zones: createDefaultLayoutZones(),
    objects: filteredObjects,
    rules: input.rules,
    appearance: designSystem.resolveAppearance({
      role: input.role ?? "student",
      phase: input.phase ?? "normal"
    })
  };
}
