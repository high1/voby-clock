import { $, useAnimationLoop } from 'voby';
import { ClockHand } from 'ClockHand';

const length = 60;

export const ClockFace = () => {
  const getSecondsSinceMidnight = (): number =>
    (Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000;
  const time = $(getSecondsSinceMidnight());

  const rotate = (rotate: number, fractionDigits = 1) =>
    `rotate(${(rotate * 360).toFixed(fractionDigits)})`;
  const subsecond = () => rotate(time() % 1, 0);
  const second = () => rotate((time() % 60) / 60);
  const minute = () => rotate(((time() / 60) % 60) / 60);
  const hour = () => rotate(((time() / 60 / 60) % 12) / 12);

  useAnimationLoop(() => time(getSecondsSinceMidnight()));

  return (
    <div class="flex items-center justify-center h-screen @dark:bg-neutral-700">
      <svg viewBox="0 0 200 200" class="h-95vmin">
        <g class="translate-100px">
          <circle
            class="stroke-neutral-900 @dark:stroke-neutral-100 fill-none"
            r="99"
          />
          {Array.from({ length }, (_, index) => ({
            isHour: index % 5 === 0,
          })).map(({ isHour }, index) => (
            <ClockHand
              transform={rotate(index / length, 0)}
              class={
                isHour
                  ? 'stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-2'
                  : 'stroke-neutral-400 @dark:stroke-neutral-600'
              }
              length={isHour ? 7 : 3}
              stationary
            />
          ))}
        </g>
        <g class="translate-100px">
          <ClockHand
            transform={subsecond}
            class="stroke-neutral-200 @dark:stroke-neutral-600 stroke-width-5"
            length={83}
          />
          <ClockHand
            transform={hour}
            class="stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-4"
            length={50}
          />
          <ClockHand
            transform={minute}
            class="stroke-neutral-800 @dark:stroke-neutral-200 stroke-width-3"
            length={70}
          />
          <ClockHand
            transform={second}
            class="stroke-red-500 stroke-width-2"
            length={77}
          />
        </g>
      </svg>
    </div>
  );
};
