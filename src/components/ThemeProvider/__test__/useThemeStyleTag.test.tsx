import type { Theme } from "fiskaz";
import { renderHook } from "@testing-library/react";
import { useThemeStyleTag } from "../useThemeStyleTag";

describe("useThemeStyleTag", () => {
  const defaultTheme = {
    "css-var-1": "1",
    "css-var-2": "2",
  } as unknown as Theme;

  it("should render style tag", () => {
    const { result } = renderHook(() =>
      useThemeStyleTag({ theme: defaultTheme })
    );
    expect(
      document.getElementById(result.current.themeClassName)
    ).not.toBeNull();
  });

  it("should remove tag on umnount", () => {
    const { result, unmount } = renderHook(() =>
      useThemeStyleTag({ theme: defaultTheme })
    );
    unmount();
    expect(document.getElementById(result.current.themeClassName)).toBeNull();
  });
});
