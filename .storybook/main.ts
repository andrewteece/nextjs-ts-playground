// .storybook/main.ts
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    // colocated stories (either `*.stories.tsx` next to the component)
    "../src/components/**/*.stories.@(ts|tsx|mdx)",
    // OR if you use `__stories__` subfolders, keep this too:
    "../src/components/**/__stories__/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
  },
};

export default config;
