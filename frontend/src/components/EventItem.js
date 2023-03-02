import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you shure?");

    if (proceed) {
      submit(null, { method: "delete" });
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

// CAME FROM App.js
// STEP 6:
// 6.1 Call this hook ("useSubmit"). This hook gives you a submit function and store into "const submit = ..."
// 6.2 We can call this "submit" here if "ifcheck".
// 6.3 And to this submit function we can pass two arguments. First - data that we wanna submit and data always wrapped like data object, which we then could extract with the special form data method, but I no need data in this case, and set this to "null"
// 6.4 The second argument then allows us to basically set the same values we could set on a form (method). Method, which trigger action ("delete"). And we could set the action key to a different path, if our action would be defined on a deffirent route path. /// "submit(null, { method: "delete", action: "/a-different-path" })" If this action define on the same route to which this component belongs in the end, or which this component is rendered in the end, and we don't need to set the action. /// "submit(null, { method: "delete"})".
// Method currently also doesn't matter, but it makes sense to set this to delete. And I actually now wanna use it in "EventDetail.js"
// GO TO EventDetail.js to use it --->>>
//
// CAME FROM EventDetail.js
// STEP 8:
// 8.1
// 299. SUBMITTIMG DATA PROGRAMMATICALLY
