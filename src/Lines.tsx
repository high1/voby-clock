import { Hand } from 'Hand';

type LinesProps = { numberOfLines: number, lineClass: string, lineLength: number, lineWidth: number };
const lineRotate = (index: number, length: number) => `rotate(${(360 * index) / length} 100 100)`

export const Lines = ({ numberOfLines, lineClass, lineLength, lineWidth }: LinesProps): JSX.Element => (
 Array.from({ length: numberOfLines }).map((_, index) =>
    <Hand rotate={lineRotate(index, numberOfLines)} handClass={lineClass} handLength={lineLength} handWidth={lineWidth} fixed />
 )
);