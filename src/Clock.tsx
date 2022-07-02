import { $, useAnimationLoop } from 'voby';
import { ClockFace } from 'ClockFace';

const getSecondsSinceMidnight = (): number =>
  (Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000;

export const Clock = (): JSX.Element => {
  const time = $(getSecondsSinceMidnight());
  useAnimationLoop(() => time(getSecondsSinceMidnight()));

  const rotate = (rotate: number, fixed: number = 1) =>
    `rotate(${(rotate * 360).toFixed(fixed)})`;
  const subsecond = () => rotate(time() % 1, 0);
  const second = () => rotate((time() % 60) / 60);
  const minute = () => rotate(((time() / 60) % 60) / 60);
  const hour = () => rotate(((time() / 60 / 60) % 12) / 12);

  return (
    <div class="flex items-center justify-center h-full @dark:bg-neutral-700">
      <ClockFace {...{ hour, minute, second, subsecond }} />
    </div>
  );
};
