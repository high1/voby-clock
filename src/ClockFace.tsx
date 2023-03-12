import { $, useAnimationLoop } from 'voby';
import { ClockHand } from 'ClockHand';

const length = 60;

export const ClockFace = () => {
  const getSecondsSinceMidnight = () =>
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
    <div class="grid place-content-center h-screen @dark:bg-neutral-700">
      <svg viewBox="0 0 200 200" class="h-95vmin">
        <g class="translate-1/2">
          <circle
            class="stroke-neutral-600 @dark:stroke-neutral-200 fill-none"
            r="98"
          />
          {Array.from({ length }, (_, index) => index % 5 === 0).map(
            (isHour, index) => (
              <ClockHand
                transform={rotate(index / length, 0)}
                class={
                  isHour
                    ? 'stroke-2 stroke-neutral-600 @dark:stroke-neutral-200'
                    : 'stroke-neutral-200 @dark:stroke-neutral-600'
                }
                length={isHour ? 6 : 3}
                stationary
              />
            )
          )}
        </g>
        <g class="translate-1/2">
          <ClockHand
            transform={subsecond}
            class="stroke-4 stroke-neutral-200 @dark:stroke-neutral-600"
            length={82}
          />
          <ClockHand
            transform={hour}
            class="stroke-4 stroke-neutral-600 @dark:stroke-neutral-200"
            length={46}
          />
          <ClockHand
            transform={minute}
            class="stroke-3 stroke-neutral-400"
            length={64}
          />
          <ClockHand
            transform={second}
            class="stroke-2 stroke-red-500"
            length={76}
          />
        </g>
      </svg>
    </div>
  );
};
