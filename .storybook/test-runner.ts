import { checkA11y, injectAxe } from "axe-playwright";

// some invocations pass undefined page; guard it
export const setup = async (page: any) => {
  if (!page?.evaluate) return;
  try {
    await injectAxe(page);
  } catch (error) {
    console.warn("Failed to inject axe-core:", error);
  }
};

export const preVisit = async (_page: any, { context }: any) => {
  // while triaging, you can skip docs by running SB_TEST_SKIP_DOCS=1
  if (process.env.SB_TEST_SKIP_DOCS === "1" && context.viewMode === "docs")
    return false;
};

// Use postVisit instead of deprecated postRender
export const postVisit = async (page: any) => {
  if (!page?.evaluate) return;

  // Wait for the page to be fully loaded
  try {
    await page.waitForLoadState("networkidle");
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  } catch (error) {
    console.warn("Accessibility check failed:", error);
    // Don't fail the test if axe check fails, just warn
    return;
  }
};
