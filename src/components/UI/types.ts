import React from "react";

type Color = "#aaa" | "agua" | "white";

export type TextProps = { color?: Color | "black" };

type ComponentProp<T extends React.ElementType> = {
  component?: T | "span";
};

type PropsWithComponent<T extends React.ElementType> = ComponentProp<T> &
  TextProps;

type PropsToOmit<T extends React.ElementType, U> = keyof (ComponentProp<T> & U);

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type Props<T extends React.ElementType, U> = PolymorphicComponentProp<
  T,
  U
>;

export type PolymorphicComponentProp<
  T extends React.ElementType,
  U = {},
> = React.PropsWithChildren<PropsWithComponent<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, U>>;

export type PolymorphicComponentPropWithRef<
  T extends React.ElementType,
  U,
> = PolymorphicComponentProp<T, U> & { ref?: PolymorphicRef<T> };

export type TextComponent = <T extends React.ElementType>(
  props: PolymorphicComponentPropWithRef<T, TextProps>,
) => JSX.Element | null;
