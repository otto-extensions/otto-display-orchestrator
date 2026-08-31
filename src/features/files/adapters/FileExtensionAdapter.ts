import { commandService } from "../../../integration/csl-registration.js";

/**
 * Adapter for wrapping Otto File Extension CSL commands
 * Provides unified file operations interface for orchestrator features
 */
export class FileExtensionAdapter {
  /**
   * Read a file's content
   * @param path - File path relative to content root
   * @returns File content as string
   */
  async read(path: string): Promise<string> {
    const result = await commandService.execute<{ path: string }, string>(
      'file.read',
      { path }
    );
    return result;
  }

  /**
   * Write content to a file
   * @param path - File path relative to content root
   * @param content - Content to write
   * @returns Success boolean
   */
  async write(path: string, content: string): Promise<boolean> {
    await commandService.execute<{ path: string; content: string }, void>(
      'file.write',
      { path, content }
    );
    return true;
  }

  /**
   * List files in a directory
   * @param path - Directory path relative to content root
   * @returns Array of file/directory names
   */
  async list(path: string): Promise<string[]> {
    const result = await commandService.execute<{ path: string }, string[]>(
      'file.list',
      { path }
    );
    return result;
  }

  /**
   * Delete a file or directory
   * @param path - File/directory path relative to content root
   * @returns Success boolean
   */
  async delete(path: string): Promise<boolean> {
    await commandService.execute<{ path: string }, void>(
      'file.delete',
      { path }
    );
    return true;
  }

  /**
   * Check if a file or directory exists
   * @param path - File/directory path relative to content root
   * @returns True if exists
   */
  async exists(path: string): Promise<boolean> {
    try {
      await this.list(path);
      return true;
    } catch {
      return false;
    }
  }
}

export const fileExtensionAdapter = new FileExtensionAdapter();
