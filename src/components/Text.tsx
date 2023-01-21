import React from "react";

type Color = "teal" | "white";

type TextProps<T extends React.ElementType> = {
  component?: T;
  color?: Color | "black";
};

type Props<T extends React.ElementType> = React.PropsWithChildren<
  TextProps<T>
> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

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
