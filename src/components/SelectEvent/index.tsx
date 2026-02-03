import { useContext } from 'preact/hooks';
import './style.css';
import { CurrentEventContext } from '../../context/EventContext';

export const SelectEvent = () => {
  const { currentEvent, setCurrentEvent, events } = useContext(CurrentEventContext);
  return (
    <div className="grid" style={{ marginTop: '4rem' }}>
      <div />
      <details className="dropdown">
        <summary>{currentEvent.name}</summary>
        <ul>
          {events.map(event =>
            <li>
              <a href="#"
                 onClick={() => setCurrentEvent(event)}>{event.name} | <small>{event.startDate}</small>
              </a>
            </li>
          )}
        </ul>
      </details>
      <div />
    </div>
  );
};