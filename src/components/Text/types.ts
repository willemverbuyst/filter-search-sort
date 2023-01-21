import React from "react";

export type Color = "teal" | "white";

export type TextProps<T extends React.ElementType> = {
  component?: T;
  color?: Color | "black";
};

export type Props<T extends React.ElementType> = React.PropsWithChildren<
  TextProps<T>
> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;
