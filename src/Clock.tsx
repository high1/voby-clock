
/* IMPORT */
import {$, useCleanup, useComputed, useInterval} from 'voby';
import { Hand } from 'Hand';
import { Lines } from 'Lines';

const miliseconds = (date: Date) => ((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds()) * 1000 + date.getMilliseconds();
const subsecond = (date: Date) => ((miliseconds(date) / 1000)) * 360;
const second = (date: Date) => ((miliseconds(date) / 1000) % 60) * 360 / 60;
const minute = (date: Date) => ((miliseconds(date) / 1000 / 60) % 60) * 360 / 60;
const hour = (date: Date) => ((miliseconds(date) / 1000 / 60 / 60) % 12) * 360 / 12;
const rotate = (rotate: number) => `rotate(${Math.round((rotate + 90) * 10) / 10} 100 100)`;

const ClockFace = (): JSX.Element => {
  const date = $(new Date ());
  const clearInterval = useInterval (() =>  date(new Date), 40);
  useCleanup(clearInterval);

  const subSec = useComputed(() => rotate(subsecond(date())));
  const sec = useComputed(() => rotate(second(date())));
  const hr = useComputed(() => rotate(hour(date())));
  const min = useComputed(() => rotate(minute(date())));
  
  return (
  <svg viewBox="0 0 200 200" width="82">
    <circle className="text-neutral-900" cx="100" cy="100" r="98" fill="none" stroke="currentColor" />
    <circle class="text-neutral-900" cx="100" cy="100" r="98" fill="none" stroke="currentColor" />
    <Lines numberOfLines={60} lineClass='text-cyan-500' lineLength={5} lineWidth={1} />
    <Lines numberOfLines={12} lineClass='text-emerald-500' lineLength={15} lineWidth={2} />

    {/* solid-like recreate implementation */}
    {/* {() => hand(rotate(subsecond(date())), 'text-neutral-300', 8, 90)}
    {() => hand(rotate(hour(date())), 'text-neutral-700', 4, 50)}
    {() => hand(rotate(minute(date())), 'text-neutral-500', 3, 70)}
    {() => hand(rotate(second(date())), 'text-red-500', 2, 90)} */}

    {/* computed implementation */}
    <Hand rotate={subSec} handClass="text-neutral-300" handLength={90} handWidth={8} />
    <Hand rotate={hr} handClass="text-neutral-700" handLength={50} handWidth={4} />
    <Hand rotate={min} handClass="text-neutral-500" handLength={70} handWidth={3} />
    <Hand rotate={sec} handClass="text-red-500" handLength={90} handWidth={2} />
    { /* {hand(hr, 'text-neutral-700', 50, 4)}
    {hand(min, 'text-neutral-500', 70, 3)}
    {hand(sec, 'text-red-500', 90, 2)} */}
  </svg>
);
  };

export const Clock = (): JSX.Element => (
<div class="flex flex-wrap items-center justify-center h-full">
  {Array.from({ length: 276 }).map(() => <ClockFace />)}
</div>
);


