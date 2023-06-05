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
    <div class="grid h-screen place-content-center @dark:bg-gray-800">
      <svg viewBox="0 0 200 200" class="h-95vmin">
        <g class="translate-1/2">
          <circle
            class="fill-none stroke-gray-600 @dark:stroke-gray-200"
            r="98"
          />
          {Array.from({ length }, (_, index) => !(index % 5)).map(
            (isHour, index) => (
              <ClockHand
                transform={rotate(index / length, 0)}
                class={
                  isHour
                    ? 'stroke-gray-600 stroke-2 @dark:stroke-gray-200'
                    : 'stroke-gray-200 @dark:stroke-gray-600'
                }
                length={isHour ? 6 : 2.5}
                stationary
              />
            )
          )}
        </g>
        <g class="translate-1/2">
          <ClockHand
            transform={subsecond}
            class="stroke-3 stroke-gray-200 @dark:stroke-gray-600"
            length={82}
          />
          <ClockHand
            transform={hour}
            class="stroke-gray-600 @dark:stroke-gray-200 stroke-4"
            length={46}
          />
          <ClockHand
            transform={minute}
            class="stroke-3 stroke-gray-400"
            length={64}
          />
          <ClockHand
            transform={second}
            class="stroke-2 stroke-voby"
            length={76}
          />
        </g>
      </svg>
    </div>
  );
};
