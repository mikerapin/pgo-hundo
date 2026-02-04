import { useContext } from 'preact/hooks';
import './style.css';
import { CurrentEventContext } from '../../context/EventContext';
import { EventData } from '../../types/EventData';

export const SelectEvent = () => {
  const { currentEvent, setCurrentEvent, events } = useContext(CurrentEventContext);

  const isSelectedEvent = (event: EventData) => event.name === currentEvent?.name && event.startDate === currentEvent?.startDate;
  return (
    <select name="selected-event" aria-label="Select an event..."
            onChange={(e) => setCurrentEvent(events.find(event => (event.name + event.startDate) === e.currentTarget.value))}>
      <option selected disabled value="">
        Select an event...
      </option>
      {events.map(event =>
        <option value={event.name + event.startDate} selected={isSelectedEvent(event)}>
          {event.name} | <small>{new Date(event.startDate).toLocaleDateString()}</small>
        </option>
      )}
    </select>
  );

  // const isSelectedEvent = (event: EventData) => event.name === currentEvent?.name && event.startDate === currentEvent?.startDate;
  //
  // return (
  //   <details className="dropdown">
  //     <summary className="secondary">Select event</summary>
  //     <ul dir="rtl">
  //       {events.map(event =>
  //         <li>
  //           <a
  //             className={isSelectedEvent(event) ? 'secondary' : ''}
  //             href="#"
  //             onClick={() => setCurrentEvent(event)}
  //             style={{ textDecoration: isSelectedEvent(event) ? 'underline' : 'none' }}
  //           >
  //             {event.name} | <small>{new Date(event.startDate).toLocaleDateString()}</small>
  //           </a>
  //         </li>
  //       )}
  //     </ul>
  //   </details>
  // );
};