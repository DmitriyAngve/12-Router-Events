import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm event={data.event} />;
}

export default EditEventPage;

// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES
//
// If I need to add new fetures like buttons for "edit" and "delete" first of all I wanna go to EventItems.js file
// GO TO EventsItems.js --->>>
// STEP 2:
// 2.1 I want to show the EventForm.js. For this I will output this Event Form here. /// "return <EventForm />"
// Need to add prepopulated in this "EventForm" with the data for the event which we're trying to edit here. Now to do that, we need to fetch that event detailed data not just on the EventDetail.js but also here on the EditEvent.js. because that's where we need the data for the "<EventForm />".
// So in this EditEvent.js page, we need to fetch the same data as we fetch here on the EventDetail.js page.
// GO TO App.js --->>>

//
// CAME FROM App.js
// STEP 3:
// 3.1 Here we can also use the useLoaderData hook, which we must import from r-r-d.
// 3.2 Store it into data, which as we learned before includes the evnet whic we need under the event property.
// 3.3 Now we could pass the event to the "<EventForm />", as a prop.
// GO TO EventForm.js --->>> here we can use it.
//
// CAME FROM EventDetail.js
// STEP 6:
// 6.1 Chaneg "useLoaderData" to "useRouteLoaderData" and use that id which we assigned.
// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES
