import { ThemeProviderProps, tokens } from "fiskaz";
import { makeStyles, mergeClasses } from "@griffel/react";
import { useThemeStyleTag } from "./useThemeStyleTag";

const themeProviderClassNames = {
  root: "fiskaz-theme-provider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const useStyles = ({
  className,
  theme,
}: Partial<ThemeProviderProps>) => {
  const baseStyles = useBaseStyles();
  const { themeClassName } = useThemeStyleTag({ theme });
  return mergeClasses(
    themeProviderClassNames.root,
    baseStyles.root,
    themeClassName,
    className
  );
};
