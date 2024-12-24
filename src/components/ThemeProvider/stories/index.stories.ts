import type { Meta } from "@storybook/react";
import { ThemeProvider } from "fiskaz";
import { Default } from "./Default.stories";
import { Nested } from "./Nested.stories";
// @ts-expect-error - required for ts
import DefaultSource from "./Default.stories?raw";
// @ts-expect-error - required for ts
import NestedSource from "./Nested.stories?raw";

const meta = {
  title: "Theme/ThemeProvider",
  component: ThemeProvider,
} satisfies Meta<typeof ThemeProvider>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(Nested as any).parameters = {
  docs: {
    source: {
      code: NestedSource,
    },
  },
};

export { Default, Nested };
