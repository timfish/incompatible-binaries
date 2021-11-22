import { fdir, PathsOutput } from "fdir";
import binary from "binary-info";
import { unlinkSync } from "fs";

export function listIncompatibleBinaries(
  basePath: string,
  platform: string,
  arch: string
): string[] {
  return new fdir()
    .withFullPaths()
    .filter((path) => binary.isIncompatible(path, { platform, arch }))
    .crawl(basePath)
    .sync() as PathsOutput;
}

export function deleteIncompatibleBinaries(
  basePath: string,
  platform: string,
  arch: string
) {
  for (const file of listIncompatibleBinaries(basePath, platform, arch)) {
    try {
      unlinkSync(file);
    } catch (e) {
      console.error("Unable to delete file", file, e);
    }
  }
}
