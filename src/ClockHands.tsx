import { $, useAnimationLoop } from 'voby';

import { ClockLine as ClockHand } from '@/ClockLine';
import { hours, rotate, seconds } from '@/common';

export const ClockHands = () => {
  const getSecondsSinceMidnight = () =>
    (Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000;
  const time = $(getSecondsSinceMidnight());

  const subsecond = () => rotate(time() % 1, 0);
  const second = () => rotate((time() % seconds) / seconds);
  const minute = () => rotate(((time() / seconds) % seconds) / seconds);
  const hour = () => rotate(((time() / seconds ** 2) % hours) / hours);

  useAnimationLoop(() => time(getSecondsSinceMidnight()));

  return (
    <>
      <ClockHand
        class="stroke-zinc-200 stroke-3 dark:stroke-zinc-600"
        length={82}
        transform={subsecond}
      />
      <ClockHand
        class="stroke-zinc-600 stroke-4 dark:stroke-zinc-200"
        length={46}
        transform={hour}
      />
      <ClockHand
        class="stroke-zinc-400 stroke-3"
        length={64}
        transform={minute}
      />
      <ClockHand class="stroke-voby stroke-2" length={76} transform={second} />
    </>
  );
};
