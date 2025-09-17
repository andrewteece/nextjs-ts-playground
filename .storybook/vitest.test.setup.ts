// This file is used to set up the Storybook test environment for Vitest

import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/react";
import * as projectAnnotations from "./preview";

// Override the preview settings to disable a11y for tests
const previewWithA11yDisabled = {
  ...projectAnnotations.default,
  parameters: {
    ...projectAnnotations.default.parameters,
    a11y: { disable: true },
  },
};

// This is important to apply the right configuration when testing stories
setProjectAnnotations([a11yAddonAnnotations, previewWithA11yDisabled]);
