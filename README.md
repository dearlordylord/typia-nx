- created with npx create-nx-workspace
- "integrated monorepo", "react", "vite" option" selected
- according to https://typia.io/docs/setup/#nx :
  - select npm in wizard
  - skip the project.json modification step: we go with vite, not nodejs

`npx jsr add -D @ryoppippi/unplugin-typia`

do in vite.config.ts:

```typescript
import UnpluginTypia from '@ryoppippi/unplugin-typia/vite'
 
export default defineConfig({
  plugins: [
    UnpluginTypia({ /* options */ })
  ],
})
```
  
tried also:

`const UnpluginTypia = require('@ryoppippi/unplugin-typia/vite')`
`import UnpluginTypia from '@ryoppippi/unplugin-typia/dist-cjs/vite'`

renaming to `vite.config.mts` in accordance with https://vitejs.dev/guide/troubleshooting#config 

also tried:

```
npx jsr add -D @ryoppippi/unplugin-typia
npm install --save typia
npx typia setup


```

from https://typia.io/docs/setup/#bundlers 

# error

on `npx nx serve typia`:

```
Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it.
  AggregateCreateNodesError: An error occurred while processing files for the @nx/vite/plugin plugin.
    - apps/typia/vite.config.ts: Build failed with 1 error:
  node_modules/esbuild/lib/main.js:1225:27: ERROR: [plugin: externalize-deps] "@ryoppippi/unplugin-typia/vite" resolved to an ESM file. ESM file cannot be loaded by `require`. See https://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only for more details.
      at createNodesFromFiles (/Users/firfi/work/typia-nx/node_modules/nx/src/project-graph/plugins/utils.js:58:15)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at Array.createNodesV2 (/Users/firfi/work/typia-nx/packages/vite/src/plugins/plugin.ts:57:14)
      at LoadedNxPlugin.createNodes (/Users/firfi/work/typia-nx/node_modules/nx/src/project-graph/plugins/internal-api.js:31:36)
      at LoadedNxPlugin.createNodes.<computed> (/Users/firfi/work/typia-nx/node_modules/nx/src/project-graph/plugins/internal-api.js:41:28)
      at async Promise.all (index 1)
      at processFilesAndCreateAndSerializeProjectGraph (/Users/firfi/work/typia-nx/node_modules/nx/src/daemon/server/project-graph-incremental-recomputation.js:148:43)
      at Timeout._onTimeout (/Users/firfi/work/typia-nx/node_modules/nx/src/daemon/server/project-graph-incremental-recomputation.js:85:13)
```

