# OttoDisplayOrchestratorAgent

Apply the root `copilot-instructions.md` in this repository first.

## Role
Generate and maintain the `otto-display-orchestrator` repository as the Otto Display Orchestrator extension.

Agents may NOT create APIs or CLIs directly. Agents may ONLY register commands in the command service layer. API and CLI surfaces are generated automatically from the command registry.

## Responsibilities
- Define reusable display layout rules, zones, and object catalogs.
- Maintain generic phase and event override rules for all Otto display experiences.
- Compile deterministic display payloads consumed by the Otto frontend.
- Keep design decisions delegated to the Otto Design System adapter.
- Integrate module data via the `ModuleDataAdapter` abstraction.

## Constraints
- Keep layout logic deterministic and reusable across classroom, lobby, chapel, and event displays.
- Keep rule resolution conflict-aware and safe for fallback scenarios.
- Treat the generated document as the single source of truth for frontend rendering.
- Do not create API or CLI surfaces directly.
