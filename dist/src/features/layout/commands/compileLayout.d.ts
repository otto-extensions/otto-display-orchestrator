import type { DisplayObject } from "../models/DisplayObject.js";
import type { LayoutRule } from "../models/LayoutRule.js";
export declare const COMPILE_LAYOUT_COMMAND_ID = "display.layout.compile";
export interface CompileLayoutInput {
    rules: LayoutRule[];
    objects: DisplayObject[];
    role?: string;
    phase?: string;
}
export declare function compileLayout(input: CompileLayoutInput): Promise<import("../services/LayoutCompilerService.js").CompiledLayoutDocument>;
