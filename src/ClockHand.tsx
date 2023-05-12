type ClockHandProps = JSX.SVGAttributes<SVGLineElement> & {
  length: number;
  limit?: number;
  stationary?: boolean;
};

export const ClockHand = ({
  length,
  limit = 94,
  stationary,
  ...rest
}: ClockHandProps) => (
  <line
    y1={stationary ? length - limit : undefined}
    y2={-(stationary ? limit : length)}
    strokeLinecap="round"
    {...rest}
  />
);
