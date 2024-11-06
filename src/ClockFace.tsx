import { $, useAnimationLoop } from 'voby';
import { ClockHand } from 'ClockHand';

const base = 60;
const long = base / 5;

export const ClockFace = () => {
  const getSecondsSinceMidnight = () =>
    (Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000;
  const time = $(getSecondsSinceMidnight());

  const rotate = (rotate: number, fractionDigits = 1) =>
    `rotate(${(rotate * 360).toFixed(fractionDigits)})`;
  const subsecond = () => rotate(time() % 1, 0);
  const second = () => rotate((time() % base) / base);
  const minute = () => rotate(((time() / base) % base) / base);
  const hour = () => rotate(((time() / base ** 2) % long) / long);

  useAnimationLoop(() => time(getSecondsSinceMidnight()));

  return (
    <div class="grid h-screen place-content-center dark:bg-zinc-800">
      <svg viewBox="0 0 200 200" class="h-[95vmin]">
        <g class="translate-1/2">
          <circle
            class="stroke-zinc-600 dark:stroke-zinc-200"
            fill="none"
            r="98"
          />
          {Array.from({ length: base }, (_, index) => !(index % 5)).map(
            (isHour, index) => (
              <ClockHand
                transform={rotate(index / base, 0)}
                class={
                  isHour
                    ? 'stroke-zinc-600 stroke-2 dark:stroke-zinc-200'
                    : 'stroke-zinc-200 dark:stroke-zinc-600'
                }
                length={isHour ? 6 : 2.5}
                stationary
              />
            ),
          )}
        </g>
        <g class="translate-1/2">
          <ClockHand
            transform={subsecond}
            class="stroke-3 stroke-zinc-200 dark:stroke-zinc-600"
            length={82}
          />
          <ClockHand
            transform={hour}
            class="stroke-zinc-600 dark:stroke-zinc-200 stroke-4"
            length={46}
          />
          <ClockHand
            transform={minute}
            class="stroke-3 stroke-zinc-400"
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
