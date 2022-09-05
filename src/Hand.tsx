type HandProps = {
  length: number;
  limit?: number;
  stationary?: boolean;
} & JSX.SVGAttributes<SVGLineElement>;

export const Hand = ({
  class: clazz,
  length,
  limit = 94,
  stationary,
  ...rest
}: HandProps): JSX.Element => (
  <line
    class={['stroke-cap-round', clazz]}
    {...(stationary && { y1: length - limit })}
    y2={-(stationary ? limit : length)}
    {...rest}
  />
);
