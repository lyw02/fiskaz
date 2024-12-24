import { useId, useLayoutEffect, useMemo, useRef } from "react";
import { ThemeProviderProps } from "./ThemeProvider";
import { createCSSRuleFromTheme } from "./createCSSRuleFromTheme";

const createStyleTag = (
  target: Document | undefined,
  elementAttributes: Record<string, string>
) => {
  if (!target) {
    return undefined;
  }

  const tag = target.createElement("style");

  Object.keys(elementAttributes).forEach((attrName) => {
    tag.setAttribute(attrName, elementAttributes[attrName]);
  });

  target.head.appendChild(tag);
  return tag;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;

  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }

    sheet.insertRule(rule, 0);
  }
};

export const useThemeStyleTag = ({ theme }: Partial<ThemeProviderProps>) => {
  const generatedId = useId();
  const escapedId = useMemo(() => generatedId.replace(/:/g, ""), [generatedId]);
  const themeClassName = "fiskaz-theme-provider" + escapedId;
  const rule = useMemo(
    () => createCSSRuleFromTheme(`.${themeClassName}`, theme),
    [theme, themeClassName]
  );
  const styleTag = useRef<HTMLStyleElement | undefined | null>(null);
  useLayoutEffect(() => {
    styleTag.current = createStyleTag(document, { id: themeClassName });
    if (styleTag.current) {
      insertSheet(styleTag.current, rule);
    }
    return () => {
      styleTag.current?.remove();
    };
  }, [themeClassName, rule]);
  return { themeClassName };
};
