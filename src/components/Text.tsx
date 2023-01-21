import React from "react";

type Props<T> = {
  component?: T;
  children: React.ReactNode;
};

export const Text = <T extends React.ElementType = "span">({
  component,
  children,
}: Props<T>): JSX.Element => {
  const Component = component || "span";
  return <Component>{children}</Component>;
};
