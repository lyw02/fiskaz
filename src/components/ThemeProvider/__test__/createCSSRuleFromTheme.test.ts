import { createCSSRuleFromTheme } from "../createCSSRuleFromTheme";
import { PartialTheme } from "../../../tokens";

describe("createCSSRuleFromTheme", () => {
  it("handles undefined theme", () => {
    expect(
      createCSSRuleFromTheme(".selector", undefined)
    ).toMatchInlineSnapshot(`".selector {}"`);
  });

  it("handles a theme", () => {
    const theme: PartialTheme = {
      borderRadiusLarge: "10px",
      colorBackgroundOverlay: "rgba(0, 0, 0, 0.4)",
    };
    expect(createCSSRuleFromTheme(".selector", theme)).toMatchInlineSnapshot(
      `".selector { --borderRadiusLarge: 10px; --colorBackgroundOverlay: rgba(0, 0, 0, 0.4); }"`
    );
  });
});
