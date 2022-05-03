
/* IMPORT */
import {$, ObservableReadonly, useCleanup, useInterval} from 'voby';
import { Hand } from 'Hand';
import { Lines } from 'Lines';

const miliseconds = (date: Date) => ((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds()) * 1000 + date.getMilliseconds();
const subsecond = (date: Date) => ((miliseconds(date) / 1000)) * 360;
const second = (date: Date) => ((miliseconds(date) / 1000) % 60) * 360 / 60;
const minute = (date: Date) => ((miliseconds(date) / 1000 / 60) % 60) * 360 / 60;
const hour = (date: Date) => ((miliseconds(date) / 1000 / 60 / 60) % 12) * 360 / 12;
const rotate = (rotate: number) => `rotate(${Math.round((rotate + 90) * 10) / 10} 100 100)`;

type ClockFaceProps = {
  hour: () => string;
  minute: () => string;
  second: () => string;
  subsecond: () => string;
}

const ClockFace = ({ hour, minute, second, subsecond }: ClockFaceProps): JSX.Element => (
  <svg viewBox="0 0 200 200" width="82">
    {/* static */}
    <circle className="text-neutral-900" cx="100" cy="100" r="98" fill="none" stroke="currentColor" />
    <circle class="text-neutral-900" cx="100" cy="100" r="98" fill="none" stroke="currentColor" />
    <Lines numberOfLines={60} lineClass='text-cyan-500' lineLength={5} lineWidth={1} />
    <Lines numberOfLines={12} lineClass='text-emerald-500' lineLength={15} lineWidth={2} />
    {/* dynamic */}
    <Hand rotate={subsecond} handClass="text-neutral-300" handLength={90} handWidth={8} />
    <Hand rotate={hour} handClass="text-neutral-700" handLength={50} handWidth={4} />
    <Hand rotate={minute} handClass="text-neutral-500" handLength={70} handWidth={3} />
    <Hand rotate={second} handClass="text-red-500" handLength={90} handWidth={2} />
  </svg>
);

export const Clock = (): JSX.Element => {
  const date = $(new Date ());
  const clearInterval = useInterval (() =>  date(new Date), 40);
  useCleanup(clearInterval);

  return (
  <div class="flex flex-wrap items-center justify-center h-full">
    {Array.from({ length: 276 }).map(() => (
      <ClockFace
        hour={() => rotate(hour(date()))}
        minute={() => rotate(minute(date()))}
        second={() => rotate(second(date()))}
        subsecond={() => rotate(subsecond(date()))}
      />
    ))}
  </div>
  )
};


