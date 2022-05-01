
/* IMPORT */
import {$, For, useComputed, useInterval, Observable} from 'voby';

const lines = (length: number, lineClass: string, lineLength: number, strokeWidth: number) => (
  <For values={Array.from({ length }, (_, index) => index)}>
    {(index) => hand(lineRotate(index, length), lineClass, lineLength, strokeWidth, true)}
  </For>
);

const hand = (rotate: Observable<string> | string, handClass: string, handLength: number, handWidth: number, fixed?: boolean) => (
  <line
    class={handClass}
    x1={100}
    y1={fixed ? 195 - handLength : 100}
    x2={100 - (fixed ? 0 : handLength)}
    y2={fixed ? 195 : 100}
    stroke="currentColor"
    stroke-width={`${handWidth}`}
    stroke-linecap="round"
    transform={rotate}
  />
);

const miliseconds = (date: Date) => ((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds()) * 1000 + date.getMilliseconds();
const subsecond = (date: Date) => ((miliseconds(date) / 1000)) * 360;
const second = (date: Date) => ((miliseconds(date) / 1000) % 60) * 360 / 60;
const minute = (date: Date) => ((miliseconds(date) / 1000 / 60) % 60) * 360 / 60;
const hour = (date: Date) => ((miliseconds(date) / 1000 / 60 / 60) % 12) * 360 / 12;
const rotate = (rotate: number) => `rotate(${Math.round((rotate + 90) * 10) / 10} 100 100)`;
const lineRotate = (index: number, length: number) => `rotate(${(360 * index) / length} 100 100)`

const ClockFace = (): JSX.Element => {
  const date = $(new Date ());
  useInterval (() =>  date(new Date), 40);
  const subSec = useComputed(() => rotate(subsecond(date())));
  const sec = useComputed(() => rotate(second(date())));
  const hr = useComputed(() => rotate(hour(date())));
  const min = useComputed(() => rotate(minute(date())));
  
  return (
  <svg viewBox="0 0 200 200" width="82">
    <circle className="text-neutral-900" cx="100" cy="100" r="98" fill="none" stroke="currentColor" />
    <circle class="text-neutral-900" cx="100" cy="100" r="98" fill="none" stroke="currentColor" />

    {/* static lines */}
    {lines(60, 'text-cyan-500', 5, 1)}
    {lines(12, 'text-emerald-500', 15, 2)}

    {/* solid-like recreate implementation */}
    {/* {() => hand(rotate(subsecond(date())), 'text-neutral-300', 8, 90)}
    {() => hand(rotate(hour(date())), 'text-neutral-700', 4, 50)}
    {() => hand(rotate(minute(date())), 'text-neutral-500', 3, 70)}
    {() => hand(rotate(second(date())), 'text-red-500', 2, 90)} */}

    {/* computed implementation */}
    {hand(subSec, 'text-neutral-300', 90, 8)}
    {hand(hr, 'text-neutral-700', 50, 4)}
    {hand(min, 'text-neutral-500', 70, 3)}
    {hand(sec, 'text-red-500', 90, 2)}
  </svg>
);
  };

export const Clock = (): JSX.Element => (
<div class="flex flex-wrap items-center justify-center h-full">
  <For values={Array.from({ length: 276 }, (_, index) => index)}>
    {() => <ClockFace />}
  </For>
</div>
);


