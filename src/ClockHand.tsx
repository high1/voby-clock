type ClockHandProps = JSX.SVGAttributes<SVGLineElement> & {
  graduation?: true;
  length: number;
  limit?: number;
};

export const ClockHand = ({
  graduation,
  length,
  limit = 94,
  ...rest
}: ClockHandProps) => (
  <line
    strokeLinecap="round"
    y1={graduation && length - limit}
    y2={-(graduation ? limit : length)}
    {...rest}
  />
);
