import { EventData } from '../types/EventData';

export const getClosestStartDateEvent = (events: EventData[]) => {
  const now = Date.now();

  return events.reduce((closest, event) => {
    const eventTime = new Date(event.startDate).getTime();
    if (Number.isNaN(eventTime)) return closest; // skip invalid dates

    if (!closest) return event;

    const closestTime = new Date(closest.startDate).getTime();
    return Math.abs(eventTime - now) < Math.abs(closestTime - now) ? event : closest;
  }, null as (typeof events)[number] | null);
};