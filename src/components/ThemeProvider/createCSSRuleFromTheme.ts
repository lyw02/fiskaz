import { Theme, PartialTheme } from "fiskaz";

export function createCSSRuleFromTheme(
  selector: string,
  theme: Theme | PartialTheme | undefined
): string {
  if (theme) {
    const cssVarsAsString = (Object.keys(theme) as (keyof typeof theme)[])
      .reduce((cssVarRule, cssVar) => {
        return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
      }, "")
      .trim();

    return `${selector} { ${cssVarsAsString} }`;
  }

  return `${selector} {}`;
}
