/* IMPORT */
import { $, FunctionMaybe, useAnimationLoop } from 'voby';
import { Hand } from 'Hand';

const getSecondsSinceMidnight = (): number => (Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000;

type ClockFaceProps = {
  hour: FunctionMaybe<string>;
  minute: FunctionMaybe<string>;
  second: FunctionMaybe<string>;
  subsecond: FunctionMaybe<string>;
};

const ClockFace = ({ hour, minute, second, subsecond }: ClockFaceProps): JSX.Element => (
  <svg viewBox="0 0 200 200" class="h-9/10">
    <g transform="translate(100, 100)">
      <circle class="text-neutral-900 fill-none stroke-current" r="99" />
      {Array.from({ length: 60 }, (_, index) => [index, index % 5]).map(([index, isNotDivisibleByFive]) => (
        <Hand
          rotate={`rotate(${(360 * index) / 60})`}
          class={isNotDivisibleByFive ? 'text-neutral-400' : 'text-neutral-800'}
          length={isNotDivisibleByFive ? 3 : 7}
          width={isNotDivisibleByFive ? 1 : 2}
          fixed
        />
      ))}
    </g>
    <g transform="translate(100, 100)">
      <Hand rotate={subsecond} class="text-neutral-200 change-transform" length={83} width={5} />
      <Hand rotate={hour} class="text-neutral-800" length={50} width={4} />
      <Hand rotate={minute} class="text-neutral-800" length={70} width={3} />
      <Hand rotate={second} class="text-red-500" length={77} width={2} />
    </g>
  </svg>
);

export const Clock = (): JSX.Element => {
  const time = $(getSecondsSinceMidnight());
  useAnimationLoop(() => time(getSecondsSinceMidnight()));

  const rotate = (rotate: number, fixed: number = 1) => `rotate(${(rotate * 360).toFixed(fixed)})`;
  const subsecond = () => rotate(time() % 1, 0);
  const second = () => rotate((time() % 60) / 60);
  const minute = () => rotate(((time() / 60) % 60) / 60);
  const hour = () => rotate(((time() / 60 / 60) % 12) / 12);

  return (
    <div class="flex flex-wrap items-center justify-center h-full">
      <ClockFace hour={hour} minute={minute} second={second} subsecond={subsecond} />
    </div>
  );
};
