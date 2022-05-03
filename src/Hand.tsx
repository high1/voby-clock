import type { FunctionMaybe } from "voby";

type HandProps = { rotate: FunctionMaybe<string>, handClass: string, handLength: number, handWidth: number, fixed?: boolean};

export const Hand = ({rotate, handClass, handLength, handWidth, fixed}: HandProps): JSX.Element => (
  <line
    class={handClass}
    x1={100}
    y1={fixed ? 195 - handLength : 100}
    x2={100 - (fixed ? 0 : handLength)}
    y2={fixed ? 195 : 100}
    stroke="currentColor"
    stroke-width={`${handWidth}`}
    stroke-linecap="round"
    transform={rotate}
  />
);