import { deleteIncompatibleBinaries, listIncompatibleBinaries } from "./index";

class IncompatibleBinaries {
  public __isElectronForgePlugin = true;

  public constructor(
    private readonly options: { dryRun?: boolean } = { dryRun: false }
  ) {
    //
  }

  public init() {}

  public getHooks() {
    return { packageAfterPrune: this.packageAfterPrune };
  }

  private packageAfterPrune = async (
    _config: unknown,
    buildPath: string,
    _electronVersion: string,
    platform: string,
    arch: string
  ): Promise<void> => {
    if (this.options?.dryRun) {
      console.log(
        "incompatible-binaries",
        listIncompatibleBinaries(buildPath, platform, arch)
      );
    } else {
      deleteIncompatibleBinaries(buildPath, platform, arch);
    }
  };
}

module.exports = IncompatibleBinaries;
