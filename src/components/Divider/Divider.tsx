import React from "react";
import { mergeClasses } from "@griffel/react";
import { ForwardRefComponent } from "../../utils/types";
import {
  dividerClassNames,
  useBaseStyles,
  useHorizontalStyles,
  useVerticalStyles,
} from "./useDividerStyles.styles";
import "./divider.css";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * How to align divider content
   * @default "center"
   */
  alignContent?: "start" | "center" | "end";
  /**
   * @default "default"
   */
  appearance?: "brand" | "default" | "strong" | "subtle";
  /**
   * Add padding at start and end of divider
   * @default false
   */
  inset?: boolean;
  /**
   * Wheather to use vertical divider
   * @default false
   */
  vertical?: boolean;
};

export const Divider: ForwardRefComponent<DividerProps> = React.forwardRef(
  (props, ref) => {
    const {
      alignContent = "center",
      appearance = "default",
      inset = false,
      vertical = false,
      className,
      style,
      children,
    } = props;
    const baseStyles = useBaseStyles();
    const horizontalStyles = useHorizontalStyles();
    const verticalStyles = useVerticalStyles();
    let hasChildren = children !== undefined && children !== null;
    if (hasChildren && typeof children === "string") {
      hasChildren = children.trim() !== "";
    }
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={mergeClasses(
          dividerClassNames.root,
          baseStyles.base,
          baseStyles[alignContent],
          baseStyles[appearance],
          !vertical && horizontalStyles.base,
          !vertical && inset && horizontalStyles.inset,
          !vertical && horizontalStyles[alignContent],
          vertical && verticalStyles.base,
          vertical && inset && verticalStyles.inset,
          vertical && verticalStyles[alignContent],
          vertical && hasChildren && verticalStyles.withChildren,
          !hasChildren && baseStyles.childless,
          className
        )}
        role="separator"
        aria-orientation={vertical ? "vertical" : "horizontal"}
        style={style}
      >
        {hasChildren && (
          <span className={dividerClassNames.wrapper}>{children}</span>
        )}
      </div>
    );
  }
);

Divider.displayName = "Divider";
