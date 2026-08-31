import type { DisplayObject } from "../features/layout/models/DisplayObject.js";
import type { LayoutRule } from "../features/layout/models/LayoutRule.js";
import { generateLayoutDocument } from "./generateLayoutDocument.js";
export interface CompileLayoutOptions {
    rules: LayoutRule[];
    objects?: DisplayObject[];
    role?: string;
    phase?: string;
}
export interface CompileLayoutResult {
    valid: boolean;
    document: ReturnType<typeof generateLayoutDocument>;
    warnings: string[];
}
export declare function compileDisplayLayout(options: CompileLayoutOptions): CompileLayoutResult;
