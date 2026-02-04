import { useContext } from 'preact/hooks';
import './style.css';
import { CurrentEventContext } from '../../context/EventContext';
import { EventData } from '../../types/EventData';

export const SelectEvent = () => {
  const { currentEvent, setCurrentEvent, events } = useContext(CurrentEventContext);

  const isSelectedEvent = (event: EventData) => event.name === currentEvent?.name;

  return (
    <details className="dropdown">
      <summary className="secondary">Select event</summary>
      <ul dir="rtl">
        {events.map(event =>
          <li>
            <a
              className={isSelectedEvent(event) ? 'secondary' : ''}
              href="#"
              onClick={() => setCurrentEvent(event)}
              style={{ textDecoration: isSelectedEvent(event) ? 'underline' : 'none' }}
            >
              {event.name} | <small>{event.startDate}</small>
            </a>
          </li>
        )}
      </ul>
    </details>
  );
};