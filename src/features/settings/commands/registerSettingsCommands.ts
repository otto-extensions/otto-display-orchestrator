import { commandService } from "../../../integration/csl-registration.js";
import {
  OrchestratorSettingsService
} from "../services/OrchestratorSettingsService.js";
import type { OrchestratorSettings } from "../models/OrchestratorSettings.js";
import type { PageSettings } from "../models/PageSettings.js";

export const ORCHESTRATOR_SETTINGS_GET_COMMAND = "orchestrator.settings.get";
export const ORCHESTRATOR_SETTINGS_SET_COMMAND = "orchestrator.settings.set";
export const ORCHESTRATOR_SETTINGS_LIST_COMMAND = "orchestrator.settings.list";
export const ORCHESTRATOR_PAGE_SETTINGS_GET_COMMAND = "orchestrator.pageSettings.get";
export const ORCHESTRATOR_PAGE_SETTINGS_SET_COMMAND = "orchestrator.pageSettings.set";
export const ORCHESTRATOR_PAGE_SETTINGS_LIST_COMMAND = "orchestrator.pageSettings.list";

export interface OrchestratorSettingsSetInput {
  patch: Partial<OrchestratorSettings>;
}

export interface OrchestratorPageSettingsGetInput {
  pageId: string;
}

export interface OrchestratorPageSettingsSetInput {
  pageId: string;
  patch: Partial<PageSettings>;
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

commandService.register<OrchestratorPageSettingsGetInput, PageSettings | null>(
  ORCHESTRATOR_PAGE_SETTINGS_GET_COMMAND,
  async (input: OrchestratorPageSettingsGetInput) => {
    const pageId = String(input.pageId || "").trim();
    if (!pageId) {
      throw new Error("pageId is required");
    }
    return settingsService.getPageSettings(pageId);
  }
);

commandService.register<OrchestratorPageSettingsSetInput, PageSettings>(
  ORCHESTRATOR_PAGE_SETTINGS_SET_COMMAND,
  async (input: OrchestratorPageSettingsSetInput) => {
    const pageId = String(input.pageId || "").trim();
    if (!pageId) {
      throw new Error("pageId is required");
    }
    return settingsService.setPageSettings(pageId, input.patch ?? {});
  }
);

commandService.register<Record<string, never>, PageSettings[]>(
  ORCHESTRATOR_PAGE_SETTINGS_LIST_COMMAND,
  async () => settingsService.listPageSettings()
);
