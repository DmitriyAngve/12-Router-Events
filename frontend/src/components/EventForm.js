import { useNavigate, Form } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES
// CAME FROM EditEvent.js
// STEP 4:
// 4.1 We can accept such aevnt prop. /// "function EventForm({ method, event }) {" - we can use this event value to set some default values on these inputs with the default value attribute provided by React.
// 4.2 This allows us to set the default event title /// "defaultValue={event.title}"
// 4.3 Add check if we have an event before trying to access it. /// "defaultValue={event ? event.title : ""}" If yes, I populate this output with the title of this event otherwise a set it to an empty string.
// 4.4 Repeat this for image, date, description.
// with that, we're using this event data to prepopulate the form and if we try to view the form, we're greeted with an error. The reason for that is that by default, when we use "useLoaderData", it searches for the closest available loader data, and the highest level at which it looks for data is the route definition of the route for which this component was loaded.
// We want to make sure that we use this loader's data instead.
// GO TO App.js
// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES

//

// 298. WORKING WITH ACTION() FUNCTIONS
// CAME FROM NewEvent.js
// STEP 3:
// Here I make sure that all your inputs have the name attribute because those names wiull later be used for extracting the data.
// 3.1 Now you should replace the "form" element with the special "<Form>" component. Import it from r-r-d.
// This "<Form>" tag will make sure that the browser default of sending a request ti the backend will be omitted, but it will take that request that would've been sent and give it to your action. That request will contain all the data that was submitted as part of the form.
// 3.2 Add into "<Form>" method property and set in to post. This request wil not be sent to the backend automatically, but instead to your action. And it will include all the form data, if you use special "<Form>" component.
// Now GO TO NewEvents.js --->>>
// 298. WORKING WITH ACTION() FUNCTIONS
