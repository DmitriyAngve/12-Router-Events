// import { useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  // const events = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
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
