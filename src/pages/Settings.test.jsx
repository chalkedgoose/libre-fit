import { describe, expect, it } from "vitest";
import { render, screen } from "../../test-utils";

import Settings from "./Settings";

/**
 * Barebones Test to check if the Settings page is rendering correctly
 * feel to free to !!! this comment if you modify the block
 * in the future.!!!
 */
describe("Settings Basic Render Test", () => {
  it("the title is visible on Settings Page", async () => {
    render(<Settings />);
    expect(
      await screen.findByTestId("settings-title-element")
    ).toBeInTheDocument();
  });
});
