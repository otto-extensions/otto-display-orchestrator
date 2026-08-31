import { compileDisplayLayout } from "../compiler/compile.js";
import { createDefaultLayoutZones } from "../features/layout/models/LayoutZone.js";
import { DisplayObjectService } from "../features/objects/services/DisplayObjectService.js";
import { ModuleDataAdapter } from "../features/layout/adapters/ModuleDataAdapter.js";
import { getDefaultLayoutRules } from "../features/layout/commands/registerLayoutRules.js";

export interface DisplaySystemContext {
  role?: string;
  phase?: string;
  time?: string;
}

export async function buildDisplaySystemDocument(context: DisplaySystemContext = {}) {
  const moduleDataAdapter = new ModuleDataAdapter();
  const objectService = new DisplayObjectService();
  const data = await moduleDataAdapter.load({ role: context.role, phase: context.phase });

  const rules = getDefaultLayoutRules();

  const compiled = compileDisplayLayout({
    rules: rules as any,
    objects: objectService.get(),
    role: context.role ?? data.auth.role,
    phase: context.phase ?? "normal"
  });

  return {
    ...compiled.document,
    moduleData: data,
    zones: createDefaultLayoutZones(),
    generatedAt: new Date().toISOString()
  };
}
