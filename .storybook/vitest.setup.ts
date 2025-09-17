import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/react";
import * as projectAnnotations from "./preview";

// Create a modified version of the preview with a11y disabled
const previewWithDisabledA11y = {
  ...projectAnnotations.default,
  parameters: {
    ...projectAnnotations.default?.parameters,
    a11y: { disable: true },
  },
};

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
// Use the modified preview instead of the original one
setProjectAnnotations([a11yAddonAnnotations, previewWithDisabledA11y]);
