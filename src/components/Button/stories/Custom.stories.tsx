import { Button } from "fiskaz";
import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
  root: {
    backgroundColor: "red",
    padding: "100px",
  },
});

export function Custom() {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button primary label="Custom Button" />
    </div>
  );
}
