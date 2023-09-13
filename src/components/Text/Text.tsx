import React from "react";

import { PolymorphicRef, Props, TextComponent, TextProps } from "./types";

export const Text: TextComponent = React.forwardRef(function Text<
  T extends React.ElementType = "span",
>(
  { component, color, children, style, ...restProps }: Props<T, TextProps>,
  ref?: PolymorphicRef<T>,
): JSX.Element {
  const Component = component || "span";
  const styles = color ? { style: { ...style, color } } : {};

  return (
    <Component {...restProps} {...styles} ref={ref}>
      {children}
    </Component>
  );
});
