import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  noExternal: ['@fluctux'], // Bundle any package starting with `@example` and their dependencies
  splitting: false,
  bundle: true,
  format: ['esm'],
  outDir: './dist',
  clean: true,
  env: { IS_SERVER_BUILD: 'true' },
  loader: { '.json': 'copy' },
  minify: true,
  sourcemap: true,
})