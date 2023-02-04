import React from "react";

export interface Hook {
  name: string;
  custom: boolean;
  component: React.FC;
}
