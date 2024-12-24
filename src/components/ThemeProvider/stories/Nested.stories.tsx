import { makeStyles } from "@griffel/react";
import {
  ThemeProvider,
  tokens,
  webLightTheme,
  webDarkTheme,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
} from "fiskaz";

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: `1px solid ${tokens.colorBrandStroke1}`,
    borderRadius: "5px",
    padding: "5px",
  },
});

export function Nested() {
  const styles = useStyles();
  return (
    <div>
      <ThemeProvider className={styles.provider} theme={webLightTheme}>
        <div className={styles.text}>
          Web Light Theme
          <ThemeProvider
            className={styles.provider}
            theme={{
              colorBrandStroke1: "red",
              colorBrandBackground2: "green",
              colorBrandForeground2: "yellow",
            }}
          >
            <div className={styles.text}>Child with nested theme</div>
          </ThemeProvider>
          <div className={styles.text}>Child with same theme</div>
        </div>
      </ThemeProvider>
    </div>
  );
}
