import { createContext, VNode } from 'preact';
import { useState } from 'preact/hooks';
import { getEvents } from '../../hooks/getEvents';
import { EventData } from '../../types/EventData';

interface CurrentEventContextProps {
  initialEvent: EventData | null;
  currentEvent: EventData | null;
  events: EventData[];
  lastUpdate: string;
  setCurrentEvent: (event: EventData) => void;
}

export const CurrentEventContext = createContext<CurrentEventContextProps>(null);

export const CurrentEventProvider = ({ children }: { children: VNode }) => {
  const { events, lastUpdate } = getEvents();
  const currentTime = new Date().getTime();
  const initialEvent = events.find(event => currentTime >= new Date(event.startDate).getTime() && currentTime <= new Date(event.endDate).getTime()) ?? events[events.length - 1];
  const [currentEvent, setCurrentEvent] = useState(initialEvent);

  // todo, some kind of timer or mechanism that automatically updates current event based on the current time

  return <CurrentEventContext.Provider
    value={{
      initialEvent,
      currentEvent,
      setCurrentEvent,
      events,
      lastUpdate
    }}>{children}</CurrentEventContext.Provider>;
};