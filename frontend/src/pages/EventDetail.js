import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EventDetailPage;

// 283 ROUTING PRACTICE
//
//STEP 8:
// 8.1 Import from r-r-d "useParams" hook. This hook when called in a component function gives us access to the currently active route parameters, so to the values that are encoded in the URL for our dynamic path segments (for ":eventsId" from App.js)
// 8.2 Add paragraph: "<p>Event ID: {params.eventID}</p>" /// "params.eventID" - because I used "eventId" as an identifier after the ":"

// Next step: Adding nested layout route that adds the <EventNavigation> component above all /events... GO TO App.js --->>>
// 283 ROUTING PRACTICE

//

// 295. DYNAMIC ROUTES & LOADER()S
// CAME FROM EventsList.js
// STEP 2:
// 2.1
// 295. DYNAMIC ROUTES & LOADER()S
