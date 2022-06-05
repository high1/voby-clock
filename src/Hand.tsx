type HandProps = {
  length: number;
  width: number;
  fixed?: boolean;
  limit?: number;
} & JSX.SVGAttributes<SVGLineElement>;

export const Hand = ({
  length,
  width,
  fixed,
  limit = 94,
  ...rest
}: HandProps): JSX.Element => (
  <line
    {...(fixed && { y1: length - limit })}
    y2={-(fixed ? limit : length)}
    stroke="currentColor"
    stroke-width={width}
    stroke-linecap="round"
    {...rest}
  />
);
