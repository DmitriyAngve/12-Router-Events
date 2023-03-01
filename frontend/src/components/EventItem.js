import classes from "./EventItem.module.css";
import { Link } from "react-router-dom";

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
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
