import { defineConfig } from "eslint/config";
import { mbcReactViteConfig } from "mbc-eslint";

export default defineConfig([
  ...mbcReactViteConfig({
    ignores: ["dist", "styled-system"],
    tsconfigRootDir: import.meta.dirname,
  }),
]);
