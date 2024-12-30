import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Divider, ThemeProvider } from "fiskaz";
import Default from "./Default.stories";
import Vertical from "./Vertical.stories";
import Appearance from "./Appearance.stories";
import Inset from "./Inset.stories";
import AlignContent from "./AlignContent.stories";
import Custom from "./Custom.stories";

// ! raw code imports
/*  @ts-expect-error - required for ts*/
import DefaultSource from "./Default.stories.tsx?raw";
// @ts-expect-error - required for ts
import VerticalSource from "./Vertical.stories?raw";
// @ts-expect-error - required for ts
import AppearanceSource from "./Appearance.stories?raw";
// @ts-expect-error - required for ts
import InsetSource from "./Inset.stories?raw";
// @ts-expect-error - required for ts
import AlignContentSource from "./AlignContent.stories?raw";
// @ts-expect-error - required for ts
import CustomSource from "./Custom.stories?raw";

const meta = {
  title: "Component/Divider",
  component: Divider,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(Vertical as any).parameters = {
  docs: {
    description: {
      story: "Vertical divider",
    },
    source: {
      code: VerticalSource,
    },
  },
};

(Appearance as any).parameters = {
  docs: {
    description: {
      story: "Appearance can be `brand`, `subtle` or `strong`",
    },
    source: {
      code: AppearanceSource,
    },
  },
};

(Inset as any).parameters = {
  docs: {
    description: {
      story: "Add inset at start and end",
    },
    source: {
      code: InsetSource,
    },
  },
};

(AlignContent as any).parameters = {
  docs: {
    description: {
      story: "Align divider content to `start`, `center` or `end`",
    },
    source: {
      code: AlignContentSource,
    },
  },
};

(Custom as any).parameters = {
  docs: {
    description: {
      story:
        "A divider can have custom styles applied to both the label and the line.",
    },
    source: {
      code: CustomSource,
    },
  },
};

export { Default, Vertical, Appearance, Inset, AlignContent, Custom };
