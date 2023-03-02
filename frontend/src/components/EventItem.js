import classes from "./EventItem.module.css";
import { Link } from "react-router-dom";

function EventItem({ event }) {
  function startDeleteHandler() {
    const proceed = window.confirm("Are you shure?");

    if (proceed) {
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES

// CAME FROM EditEvent.js
// STEP 1:
// 1.1 I wanna use the Link Component. Import and use that instead anchor element.
// 1.2 And then I want to add edit and append that to the currently active route. ("to" instead of "href").
// GO BACK TO EditEvent.js --->>>
// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES

//

// 299. SUBMITTIMG DATA PROGRAMMATICALLY
// CAME FROM EventForm.js
// STEP 2:
// There we display the "EventItem" component, and this "EventItem" component actually has a button that allows us to delete events.
// 2.1 First of all we wanna prompt the user whether he really wants to delete this event. For this we could use the built in "confirm" function. /// "const proceed = window.confirm("Are you shure?")"
// This will return a Boolean.
// 2.2 Add "ifcheck". If it's true, then we might wanna trigger an actionthat goes ahead and deletes this event.
// For that, we must add an action that should be triggered.
// GO TO App.js --->>>
// 299. SUBMITTIMG DATA PROGRAMMATICALLY
