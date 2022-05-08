import { Hand } from 'Hand';

type LinesProps = { numberOfLines: number, class: string, length: number, width: number };

const lineRotate = (index: number, length: number) => `rotate(${(360 * index) / length})`

export const Lines = ({ numberOfLines, ...rest }: LinesProps): JSX.Element => (
  Array.from({ length: numberOfLines }).map((_, index) =>
    <Hand rotate={lineRotate(index, numberOfLines)} {...rest} fixed />
  )
);