export class InProcessCommandService {
    handlers = new Map();
    register(commandName, handler) {
        if (this.handlers.has(commandName)) {
            return;
        }
        this.handlers.set(commandName, handler);
    }
    async run(commandName, payload) {
        const handler = this.handlers.get(commandName);
        if (!handler) {
            throw new Error(`Command not registered: ${commandName}`);
        }
        return (await handler(payload));
    }
}
export const commandService = new InProcessCommandService();
export async function executeDisplayOrchestratorCommand(commandName, input) {
    return commandService.run(commandName, input);
}
//# sourceMappingURL=csl-registration.js.map