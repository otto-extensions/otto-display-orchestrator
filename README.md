# Otto Display Orchestrator

This repository provides the Otto Display Orchestrator extension for dynamic display layout generation, rule compilation, and coordinated display payload assembly.

## Purpose

- Define reusable display objects and layout zones.
- Enforce layout rules by time, role, phase, and events.
- Resolve conflicts and produce deterministic display payloads.
- Integrate Otto Design System tokens and module data without direct coupling.
- Publish a final display document consumed by the frontend renderer.

## Required extension identity

- Extension ID: `otto.display.orchestrator`
- Repository: `otto-extensions/otto-display-orchestrator`

## Folder structure

```text
otto-display-orchestrator/
├── README.md
├── package.json
├── tsconfig.json
├── copilot-instructions.md
├── manifests/
│   └── extension.json
├── agents/
│   └── OttoDisplayOrchestratorAgent.md
├── src/
│   ├── index.ts
│   ├── features/
│   │   ├── layout/
│   │   │   ├── commands/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── adapters/
│   │   ├── objects/
│   │   │   ├── commands/
│   │   │   ├── services/
│   │   │   └── models/
│   │   └── phases/
│   │       ├── commands/
│   │       ├── services/
│   │       └── models/
│   ├── compiler/
│   └── integration/
├── content/
│   └── display.json
└── tests/
    └── compile.test.ts
```

## Notes

- Commands are registered in the command-service layer only.
- Frontend rendering is presentational and consumes the generated display document.
- All styling decisions are delegated to the Design System adapter.
