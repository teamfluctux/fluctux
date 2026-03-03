import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  noExternal: ["@fluctux"],
  platform: "node",
  unbundle: false,
  format: ["esm"],
  clean: true,
  dts: false,
  env: { IS_SERVER_BUILD: "true" },
  minify: true,
  sourcemap: true,
});
