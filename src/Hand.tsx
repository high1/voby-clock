import type { FunctionMaybe } from "voby";

type HandProps = { rotate: FunctionMaybe<string>, class: string, length: number, width: number, fixed?: boolean};

export const Hand = ({rotate, length, width, fixed, ...rest}: HandProps): JSX.Element => (
  <line
    x1={fixed ? 195 - length : 100}
    y1={100}
    x2={fixed ? 195 : 100}
    y2={100 - (fixed ? 0 : length)}
    stroke="currentColor"
    stroke-width={width}
    stroke-linecap="round"
    transform={rotate}
    {...rest}
  />
);