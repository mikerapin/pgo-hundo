import { useContext } from 'preact/hooks';
import './style.css';
import { CurrentEventContext } from '../../context/EventContext';

export const SelectEvent = () => {
  const { currentEvent, setCurrentEvent, events } = useContext(CurrentEventContext);
  return (
    <details className="dropdown">
      <summary className="secondary">{currentEvent.name}</summary>
      <ul dir="rtl">
        {events.map(event =>
          <li>
            <a href="#"
               onClick={() => setCurrentEvent(event)}>{event.name} | <small>{event.startDate}</small>
            </a>
          </li>
        )}
      </ul>
    </details>
  );
};