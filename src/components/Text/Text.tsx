import React from "react";

import { Props } from "./types";

export const Text = <T extends React.ElementType = "span">({
  component,
  color,
  children,
  ...restProps
}: Props<T>): JSX.Element => {
  const Component = component || "span";
  const style = color ? { style: { color } } : {};
  return (
    <Component {...restProps} {...style}>
      {children}
    </Component>
  );
};
