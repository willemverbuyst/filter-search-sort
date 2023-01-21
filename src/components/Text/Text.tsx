import React from "react";

import { Props } from "./types";

export const Text = <T extends React.ElementType = "span">({
  component,
  color = "black",
  children,
  style,
  ...restProps
}: Props<T>): JSX.Element => {
  const Component = component || "span";
  const styles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...restProps} {...styles}>
      {children}
    </Component>
  );
};
