type ClockLineProps = JSX.SVGAttributes<SVGLineElement> & {
  graduation?: true;
  length: number;
  limit?: number;
};

export const ClockLine = ({
  graduation: stationary,
  length,
  limit = 94,
  ...rest
}: ClockLineProps) => (
  <line
    strokeLinecap="round"
    y1={stationary && length - limit}
    y2={-(stationary ? limit : length)}
    {...rest}
  />
);
