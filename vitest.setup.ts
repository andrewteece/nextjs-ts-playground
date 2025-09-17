import "@testing-library/jest-dom";
import "vitest";
import { vi } from "vitest";

// Import our axe-core mocks
import "./__mocks__/axe-mock";

// Configure React testing environment
window.global ||= window;

// Define interfaces for the window object extensions
interface StorybookWindow extends Window {
  STORYBOOK_DISABLE_A11Y?: boolean;
  __STORYBOOK_PREVIEW__?: {
    channel: {
      emit: (...args: unknown[]) => void;
    };
  };
  __STORYBOOK_STORY_STORE__?: {
    fromId: (id: string) => unknown;
  };
}

// Disable a11y checks globally for tests
(window as StorybookWindow).STORYBOOK_DISABLE_A11Y = true;

// Explicitly disable the addon-a11y plugin
const storybookWindow = window as StorybookWindow;
if (storybookWindow.__STORYBOOK_PREVIEW__) {
  storybookWindow.__STORYBOOK_PREVIEW__.channel.emit = vi.fn();
  storybookWindow.__STORYBOOK_STORY_STORE__ = {
    fromId: () => null,
  };
}

// Basic setup for all tests
// Use a dynamic import without file extension for TypeScript compatibility
if (typeof window !== "undefined") {
  try {
    // Import without the .ts extension
    import("./.storybook/vitest.setup").catch((e) =>
      console.error("Failed to import Storybook setup in browser:", e),
    );
  } catch (e) {
    console.error("Failed to import Storybook setup:", e);
  }
}
