// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "Some event",
//   },
//   {
//     id: "e2",
//     title: "Another event",
//   },
// ];

// function EventsPage() {
//   return (
//     <>
//       <h1>EventsPage</h1>
//       <ul>
//         {DUMMY_EVENTS.map((event) => (
//           <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default EventsPage;

import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  return <EventsList events={fetchedEvents} />;
}

export default EventsPage;

// 283 ROUTING PRACTICE
// STEP 7:
// 7.1 Add some DUMMY EVENTS array
// 7.2 In JSX I want to display this list of events. Every event should then be turned into a list item.
// GO TO EventDetail.js --->>>
// 283 ROUTING PRACTICE

// 285. USIMG DATA FROM A LOADER IN THE ROUTE COMPONENT
// STEP 1:
// 1.1 Rid all that state management and "useEffect" and get rid <div> which shows my loading and error state. Rid "ifcheck".
// 1.2 And now to get access to the data returned by the "loader" function for this page, we can import /// "import { useLoaderData } from "react-router-dom";". This is a special hook which we can execute to get access to the closest loader data
// 1.3 Call "useLoaderData()"
// 285. USIMG DATA FROM A LOADER IN THE ROUTE COMPONENT
