# `incompatible-binaries`

Lists or deletes binaries in a directory that aren't compatible with the
supplied platform and architecture.

This can be useful when packaging Electron apps to exclude binaries that are not
for the target platform but have been picked up by bundlers like webpack.

Determines the platform and architecture of a binary via [`binary-info`](https://github.com/timfish/binary-info).

```ts
import {
  listIncompatibleBinaries,
  deleteIncompatibleBinaries,
} from "incompatible-binaries";

listIncompatibleBinaries("./directory", process.platform, process.arch);
deleteIncompatibleBinaries("./directory", process.platform, process.arch);
```

It can also be used as an Electron Forge plugin which deletes incompatible binaries
via the Electron Packager `afterPrune` hook:

```json
{
  "config": {
    "forge": {
      "packagerConfig": {},
      "makers": [],
      "plugins": [
        [
          "incompatible-binaries/forge-plugin",
          {
            "dryRun": false
          }
        ]
      ]
    }
  }
}
```
