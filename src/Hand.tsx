type HandProps = {
  length: number;
  limit?: number;
  stationary?: boolean;
  width: number;
} & JSX.SVGAttributes<SVGLineElement>;

export const Hand = ({
  length,
  limit = 94,
  stationary,
  width,
  ...rest
}: HandProps): JSX.Element => (
  <line
    {...(stationary && { y1: length - limit })}
    y2={-(stationary ? limit : length)}
    stroke="currentColor"
    stroke-width={width}
    stroke-linecap="round"
    {...rest}
  />
);
