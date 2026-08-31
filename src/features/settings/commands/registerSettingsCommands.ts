import { commandService } from "../../../integration/csl-registration.js";
import {
  OrchestratorSettingsService
} from "../services/OrchestratorSettingsService.js";
import type { OrchestratorSettings } from "../models/OrchestratorSettings.js";

export const ORCHESTRATOR_SETTINGS_GET_COMMAND = "orchestrator.settings.get";
export const ORCHESTRATOR_SETTINGS_SET_COMMAND = "orchestrator.settings.set";
export const ORCHESTRATOR_SETTINGS_LIST_COMMAND = "orchestrator.settings.list";

export interface OrchestratorSettingsSetInput {
  patch: Partial<OrchestratorSettings>;
}

const settingsService = new OrchestratorSettingsService();

commandService.register<Record<string, never>, OrchestratorSettings>(
  ORCHESTRATOR_SETTINGS_GET_COMMAND,
  async () => settingsService.get()
);

commandService.register<OrchestratorSettingsSetInput, OrchestratorSettings>(
  ORCHESTRATOR_SETTINGS_SET_COMMAND,
  async (input: OrchestratorSettingsSetInput) => settingsService.set(input.patch ?? {})
);

commandService.register<Record<string, never>, OrchestratorSettings[]>(
  ORCHESTRATOR_SETTINGS_LIST_COMMAND,
  async () => settingsService.list()
);
