type ClockHandProps = {
  length: number;
  limit?: number;
  stationary?: boolean;
} & JSX.SVGAttributes<SVGLineElement>;

export const ClockHand = ({
  class: clazz,
  length,
  limit = 94,
  stationary,
  ...rest
}: ClockHandProps) => (
  <line
    class={['stroke-cap-round', clazz]}
    y1={stationary ? length - limit : undefined}
    y2={-(stationary ? limit : length)}
    {...rest}
  />
);
