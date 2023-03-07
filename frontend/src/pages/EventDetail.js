import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import { Suspense } from "react";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}

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
// I want to output the event item here. A component which I predefined for you, and for which I already added somt styling.
// 2.1 So in "EventDetail" we want to output the vent item component. And here we must set the event prop and pass the event data for the event for which we wanna view the detail to this event prop.
// This means that we need to load the event detail as a first step.
// We could do this here "const params = useParams()" in the component by using the "params"
// 2.2 Remove "useParams". Instead, I will add another "loader" function and export it. This "loader function" for my event details.
// 2.3 Convert "loader()" to an async function. And now to fetch the data for a single event, we can use the built in fetch function and send a request to our dummy backed API, which we can reach under HTTP, local hos 8080, and then slasj events. And then the ID of the event for which we wanna load data.
// How do we get that ID in the loader? We cant "useParams" hook in the "loader()" - hooks can't be accessed there. But we still can get access to the route parameters that you need vecause r-r-d, which calls this loader function for you, actually passes an object to this loader function when executing it for you. And object contains two important pieces of data: "request" property, which contains a request object, and a "params" property, which contains an obejct with all your route parameters.
// 2.4 Add parameters: "export async function loader({request, params}){"
// Now the "request" object in a "loader" could be used to access the URL to, for example, extract query parameters or anything like that. But here we don't need it.
// Instead of this "params" object, which is interesting for us, because with that, we can get access to all the route parameter values as we could do it with help of use "params"
// So (in App.js) we have the eventID route parameter. We can acces this "eventId" /// "params.eventId"
// 2.5 Store into "const id = params.eventId", which we wanna add at the end of the url.
// 2.6 We then get a response by awaiting this fetch call /// "const response = await fetch("http://localhost:8080/events" + id)"
// 2.7 Now we return this "response" (we can return such a response object in our loader)
// That's all we want to do, we could, therefore, even return it like this: /// "return fetch("http://localhost:8080/events" + id)" /// As mentioned r-r-d would automatically wait for the promise and give us access to the data to which it resolves.
// But go back to old version.
// 2.8 I want to check if not response okay /// "if (!response.okay)"
// So if we have a 400-ish, 500-ish error code, and only if that's not the case, so if we have a successful (!response.okay) response, only in that case I wanna return the response.
// 2.9 Add "throw json()" an error by using the builtin JSON function, which is provided by r-r-d. And I will throw an error response. And add metadata object and set the status to 500.
// So with that, we added the loader code. We must register the loader in our route definitions. Just adding a "loader" function to your component won't do anything. R-r-d will not look for loaders automatically. Instead, you have to register it App.js when defining your routes.
// GO TO App.js --->>>
//
// CAME FROM App.js
// STEP 4:
// Loader will now be called whenever we try to visit this "EventDetail" page.
// 4.1 We can now "useLoaderData" hook to get hold of that data. /// "const data = useLoaderData();"
// 4.2 And with that, we can then use this data object to access to event property, because I know my backend API will include the actual event data for the loaded event in an event property on that overall response data object. /// "return <EventItem event={data.event} />"
// So with "data.event", I access that event data (data = useLoaderData()), and I pass that as a value to the event prop on event item.

// 295. DYNAMIC ROUTES & LOADER()S

//

// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES
// CAME FROM App.js
// STEP 6:
// 6.1 Instead of using "useLoaderData" we use different hook "useRouteLoaderData" this hook works almost like "useLoaderData" but it takes a route ID as an argument (in our case is "event-detail" - i added this in App.js "id: "event-detail"")
// And I use the same hook in EditEvent.js.
// GO TO EditEvent.js --->>>
// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES

//

// 299. SUBMITTIMG DATA PROGRAMMATICALLY
// CAME FROM App.js
// STEP 4:
// 4.1 I will add this action function /// "export async function action() {}"
// 4.2 And hee we then want to add the code for deleting an event. For that, we wanna use the "fetch()" and the URL and the path to which we need to send a request and then the ID of the event that should be deleted.
// 4.3 We can get that ID with the "params" object which we get for actions just as we do for "loaders"
// 4.4 So we got the eventID by accessing "params.eventId".
// 4.5 And now you can add this "eventId" to URL.
// 4.6 Get our response and add "await".
// 4.7 Add check if "response" is okay.
// 4.8 Add a successfull case. We want to probably redirect the user, so here in that case, if we make it pass this "ifcheck" where we check if the "response" is okay. I will return "redirect" to redirect the user, and load a different route with help of the built-in redirect function, which is imported from r-r-d and redirect the user to, "/events" (to a list of all events)
// GO TO App.js and use this action --->>>

// CAME FROM EventItem.js
// If we just send a request like we do that in EventDetail.js ("response...") we wouldn't delete the event because that's not the kind of request our backend is waiting for when it comes to deleteing events. Instead we need to configure this request, which we're sending and must set the "method" to delete, like this.
// We could also dynamically extract the method from the submitted form, by using that "request" object in "action" function.
// STEP 7:
// 7.1 Use method which we can use in the client side request (that was generated by r-r-d). /// "const response = await fetch("http://localhost:8080/events" + eventId, {method: request.method,});"
// And now the method we do set in EventItem.js --- >>> GO TO
// 299. SUBMITTIMG DATA PROGRAMMATICALLY

//

// 305. CONTROLLING WHICH DATA SHOULD BE DEFFERED
// Let's see how defer features shin if you have multiple request with different speeds?
// STEP 1:
// 1.1 Besides the "<EventItem>", I also wanna output my "<EventList>".
// 1.2 We must fetch the  "events" on this page. To do that, I'll copy that "loadEvents" function from Events.js
// 1.3 Add another function in this EventDetail.js file, which named "loadEvent" where I expect to get the ID of an "event" and put code inside of this function, which is responsible for loading a single event.
// 1.4 Change return value from this code with response to manually extract the data /// "const resData = await response.json();return resData.events;"
// Now I have two helper function, and I will use it in "loader" function, because in "loader" I now want to actually "defer" (and import defer).
// I will "defer" here, because we know that "loadEvents" will take a while because we have two second time out on the backend, whereas "loadEvent" should be rather fast.
// 1.5 Inside "defer" I'll pass an object to it, and I have my single event where I will call "loadEvent" and pass "id", which I'm extracting from my "params", to "loadEvent", and I have "events", where I call "loadEvent".
// Now with that done, we're using "useRouteLoaderData()" here, but that works with "defer" just as used "loader" data did. Destructuring "data" object into "{event, events}" - there are two deferred requests.
// 1.6 Add "Await" component and use this component into JSX code two times to await two different requests with props (event and events).
// 1.7 Then add dynamic values between  the opening and closing "Await" tags (in first case I want output "<EventItem>" in second - "<EventsList>") /// "{(loadedEvent) => <EventItem event={loadedEvent} />}" and "{(loadedEvents) => <EventsList events={loadedEvents} />}"
// 1.8 Wrap into <Suspense>
// 1.9 Add a "fallback"
// 305. CONTROLLING WHICH DATA SHOULD BE DEFFERED
