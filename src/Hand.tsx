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
    y1={stationary ? length - limit : undefined}
    y2={-(stationary ? limit : length)}
    {...rest}
  />
);
