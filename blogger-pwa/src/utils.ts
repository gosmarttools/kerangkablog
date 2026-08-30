import { mkdir, readdir, rm, stat } from 'node:fs/promises';

export async function existsPath(path: string): Promise<boolean> {
  return stat(path)
    .then(() => true)
    .catch(() => false);
}

export async function createDirectory(directoryPath: string, fresh = true): Promise<string | undefined> {
  if (fresh === true) {
    const exists = await stat(directoryPath)
      .then(() => true)
      .catch(() => false);
    if (exists) {
      await rm(directoryPath, { recursive: true });
    }
  }
  return await mkdir(directoryPath, { recursive: true });
}

export async function getDirectoryFiles(directoryPath: string): Promise<string[]> {
  if (await existsPath(directoryPath)) {
    return readdir(directoryPath);
  }
  return [];
}
