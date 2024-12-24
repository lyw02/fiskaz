import { ChildContextProvider, createContext, HTMLAttributes } from "react";
import { Theme, webLightTheme } from "fiskaz";
import { useStyles } from "./useStyles.styles";

type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = createContext<ThemeContextValue>(undefined);

export type ThemeProviderProps = HTMLAttributes<
  ChildContextProvider<ThemeContextValue>
> & {
  theme?: ThemeContextValue;
};
export function ThemeProvider({
  className,
  theme = webLightTheme,
  children,
  ...restProps
}: ThemeProviderProps) {
  const cls = useStyles({ className, theme });
  return (
    <ThemeContext.Provider value={theme} {...restProps}>
      <div className={cls}>{children}</div>
    </ThemeContext.Provider>
  );
}
