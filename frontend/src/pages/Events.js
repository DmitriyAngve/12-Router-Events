import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;

// 283 ROUTING PRACTICE

// STEP 7:
// 7.1 Add some DUMMY EVENTS array
// 7.2 In JSX I want to display this list of events. Every event should then be turned into a list item.
// GO TO EventDetail.js --->>>
// 283 ROUTING PRACTICE
