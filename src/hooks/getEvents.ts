import eventsJson from '../data/events.json';
import { EventData } from '../types/EventData';

export const getEvents = () => {
  const eventData = eventsJson as EventData;
  const lastUpdate = eventData.lastUpdate;

  const events = eventData.events.sort((a, b) => {
    const aStartDate = new Date(a.startDate).getTime();
    const bStartDate = new Date(b.startDate).getTime();
    if (aStartDate < bStartDate) {
      return -1;
    }
    if (aStartDate > bStartDate) {
      return 1;
    }
    return 0;
  });

  return { lastUpdate, events };
};