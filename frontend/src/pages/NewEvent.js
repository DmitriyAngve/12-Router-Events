import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

// 297. PLANNING DATA SUBMISSION
//
// STEP 1:
// We wanna display a form for adding New Event and send the data from that form to backend
// 1.1 Now we need dysplaying the form, for that I'll use "EventForm" component in NewEvent.js => return <EventForm /> and import it.
// We see form in New event page, but without prepopulated.
// Now we wanna make sure, that whenever we click that save button, and we enter in some data in form that data is sent to the backend API.
// 1.2 There are a few different approaches. We could add a function in "NewEventPage" component, accept an "event" and that "event" would be the submit event of our form, and we could call "event.preventdefault()" to make sure that he browser does not automatically send a request to the backend.
// 1.3 Then we could extract data from the form with help of two-way binding, or refs.
// And we could then manually send our HTTP request, manage some loading and error state, and navigate away from this page, once we're done...
// We could navigate away with imperative, and navigation, with help of "useNavigate" hook, we could do all of that, but as you can probably already tell by the fact that I'm saying could, thee is a better approach when using r-r-d.
// We can also add actions to send data, and that is what we should do here.
// 297. PLANNING DATA SUBMISSION
