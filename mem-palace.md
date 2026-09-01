# Otto Display Orchestrator MemPalace

Created: 2026-09-01
Purpose: Memory for orchestrator settings contracts, rotation behavior, and runtime expectations.

## Settings Model Rules

- Keep internal and external settings models aligned for shared fields.
- Tier naming and page-order fields must remain stable across adapters.

## Rotation Behavior Notes

- Playlist order supports priority and deterministic shuffle paths.
- Manual page order influences ranking within tier precedence.

## Integration Reminder

- Appearance decisions are sourced from DCS; orchestrator owns behavior and selection logic.
