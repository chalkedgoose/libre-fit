import { describe, expect, it } from "vitest";
import { render, screen } from "../../test-utils";

import Home from "./Home";

/**
 * Barebones Test to check if the Home page is rendering correctly
 * feel to free to !!! this comment if you modify the block
 * in the future.!!!
 */
describe("Home Basic Render Test", () => {
  it("the title is visible on Home Page", async () => {
    render(<Home />);
    expect(await screen.findByTestId("home-title-element")).toBeInTheDocument();
  });
});
