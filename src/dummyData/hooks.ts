import {
  UseEffectComponent,
  UseStateComponent,
} from "../components/hookComponents";
import { Hook } from "../interfaces/Hook";

export const hooks: Array<Hook> = [
  {
    name: "useState",
    custom: false,
    component: UseStateComponent,
  },
  {
    name: "useEffect",
    custom: false,
    component: UseEffectComponent,
  },
];
