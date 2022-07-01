type HandProps = {
  length: number;
  limit?: number;
  stationary?: boolean;
} & JSX.SVGAttributes<SVGLineElement>;

export const Hand = ({
  length,
  limit = 94,
  stationary,
  ...rest
}: HandProps): JSX.Element => (
  <line
    {...(stationary && { y1: length - limit })}
    y2={-(stationary ? limit : length)}
    {...rest}
    class={['stroke-cap-round', rest.class]}
  />
);
