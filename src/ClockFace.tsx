import { ClockHands } from '@/ClockHands';
import { Graduations } from '@/Graduations';

export const ClockFace = () => {
  return (
    <div class="grid h-screen place-content-center dark:bg-zinc-800">
      <svg class="h-[95vmin]" viewBox="0 0 200 200">
        <image class="size-1/6 translate-5/12" href="logo.svg" />
        <g class="translate-1/2">
          <circle
            class="fill-none stroke-zinc-600 dark:stroke-zinc-200"
            r="98"
          />
          <Graduations />
        </g>
        <g class="translate-1/2">
          <ClockHands />
        </g>
      </svg>
    </div>
  );
};
