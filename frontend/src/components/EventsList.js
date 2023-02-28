// import { useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";
import { Link } from "react-router-dom";

function EventsList({ events }) {
  // const events = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;

// 286 MORE LOADER() DATA USAGE
//
// STEP 2:
// 2.1 We can also import "useLoaderData" from r-r-d
// 2.2 Call this in "EventsList" component, even though it's not a page component.
// 2.3 If we do that you will see that this "events" object, which we getting here will be available
// Now, one place where we can't get those events is in a higher level route. If I go to this Rootlayout (Root.js as a parent path for all children path in App.js) and I use "useLoaderData" here...
// GO TO Root.js --->>>
// 286 MORE LOADER() DATA USAGE

//

// 295. DYNAMIC ROUTES & LOADER()S
//
// STEP 1:
// We wanna navigate to this event detail page.
// 1.1 For that, I'll start by going to events list and there we first of all wanna convert this anchor element to a "Link"
// 1.2 Add a path <"Link to={event.id}>" and we wanna make sure that we go to that event ID.
// Here I have a relative path relative to the path of the currently active route. That means if we take a look at App.js again, that if we are on the event page ("path: events"), and append the event ID at the end, we go to this "EventDetailPage", because that route is a child route of this events route. So this event ID is appended to this events path, in our route definitions.
// So we will go to the EventDetail page if we set up our links like above and we append the evnet ID to the currently active path when this "EventsList" is being rendered. So that should work with that change made.
// GO TO EventDetail.js --->>>
//
// 295. DYNAMIC ROUTES & LOADER()S
