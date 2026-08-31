export type CslCommandHandler<TInput, TOutput> = (payload: TInput) => Promise<TOutput>;
export declare class InProcessCommandService {
    private readonly handlers;
    register<TInput, TOutput>(commandName: string, handler: CslCommandHandler<TInput, TOutput>): void;
    run<TInput, TOutput>(commandName: string, payload: TInput): Promise<TOutput>;
}
export declare const commandService: InProcessCommandService;
export declare function executeDisplayOrchestratorCommand<TInput, TOutput>(commandName: string, input: TInput): Promise<TOutput>;
