import { defineConfig } from "eslint/config";
import { mbcNextConfig } from "mbc-eslint/next";

export default defineConfig([
  ...mbcNextConfig({
    ignores: [".next", "out", "dist", "node_modules", "next-env.d.ts"],
    tsconfigRootDir: import.meta.dirname,
    nextPreset: "core-web-vitals",
    prettierOptions: {
      singleQuote: false,
      printWidth: 80,
    },
  }),
]);
