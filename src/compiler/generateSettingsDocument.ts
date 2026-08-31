import {
  defaultOrchestratorSettings,
  normalizeOrchestratorSettings,
  type OrchestratorSettings
} from "../features/settings/models/OrchestratorSettings.js";

export interface GeneratedSettingsDocument {
  version: string;
  generatedAt: string;
  settings: OrchestratorSettings;
}

export function generateSettingsDocument(
  patch: Partial<OrchestratorSettings> = {}
): GeneratedSettingsDocument {
  const merged = {
    ...defaultOrchestratorSettings,
    ...patch
  };

  return {
    version: "1.0.0",
    generatedAt: new Date().toISOString(),
    settings: normalizeOrchestratorSettings(merged)
  };
}
