# Otto Display Orchestrator Instructions

Apply the root repository copilot instructions before making changes.

## Role
Generate and maintain the `otto-display-orchestrator` repository as the Otto display orchestration extension.

## Responsibilities
- Provide reusable display layout and phase orchestration behavior.
- Maintain layout rules, display objects, and phase definitions in a generic, reusable way.
- Produce deterministic display documents for Otto frontend experiences.
- Integrate design-system tokens and module data through adapters only.

## Constraints
- Register commands only through the Otto Command Service Layer (CSL).
- Do not create API endpoints or CLI commands.
- Do not implement styling inside the orchestrator.
- Do not call external modules directly; route all module data access through `ModuleDataAdapter`.
- Keep the compiler deterministic, conflict-aware, and front-end friendly.
- Treat all display documents as explicit source-of-truth payloads.
