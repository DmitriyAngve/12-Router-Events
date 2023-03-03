import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post" className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
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
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
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

//

// 299. SUBMITTIMG DATA PROGRAMMATICALLY
// Let's show a defferent way of triggering such a action function.
// STEP 1:
// <Form> providing by r-r-d. This "<Form>" will automatically trigger the action function of the currently active route, so the route for which form was loaded.
// 1.1 Now you send the request to a different route by adding the action prop this "<Form>" component and setting this to any other path /// "action="/any-other-part""
// Then in that case, the action of another path, of another route definition object, would be triggered.
// So if you had an action on some other route in App.js you could point at that action by simply setting the form's action prop value to the path of the route for which you wanna triggere the action, but if you wanna trigger the action of the currently active route you don't need the action prop.
// i wanna show you a totally different way of triggering an action. Fo that let's take a look at the "EventDetail.js" component (EventDetailPage)
// GO TO EventItem.js --->>> (which we dysplayed in EventDetail)
// 299. SUBMITTIMG DATA PROGRAMMATICALLY

//

// 300. UPDATING THE UI STATE BASED ON THE SUBMISSION STATUS
// Then we navigate it to a different page, we don't get any feedback regarding that and to diable the save button so that users don't try to submit the same form multiple times.
// We can get and incorporate that feedback.
// STEP 1:
// 1.1 I wanna use hook "useNavigation", let's import and call and give access to a "navigation" object.
// We can find out what the current state of the currently active transition is. And we gave a transition from one route to another if we click a link. But we also have a transition if we submit a form. And therefore, we also get information about the current data submission process about and whether it completed already. So whether the action that was triggered completed already.
// 1.2 We can add a helper const called "isSubmitting" and in there, I simply store the result of comparing navigation.state to submitting. /// "const isSubmitting = navigation.state === "submitting"". /// If the current state is submitting, I know that we are currently submitting data so that the action that was triggered is currently still active.
// 1.3 And we can use this "isSubmitting" field for disable Save button. We can disable it by setting this to "isSubmitting". /// "<button disabled={isSubmitting}>Save</button>"
// 1.4 Do the same for Cancel button.
// 300. UPDATING THE UI STATE BASED ON THE SUBMISSION STATUS

//

// 301. VALIDATING USER INPUT & OUTPUTTING VALIDATION ERRORS
//
// STEP 2:
// 2.1 In "EventForm" component I provide by r-r-d new hook "useActionData". It gives us access to the data returned by our action, in this case, not by the loader, but by the action and it gives us access to the closest action.
// I can use this in this component even though it's not the page component because it's rendered by the page component for which this action was defined where I return that response.
// So with that, in "EventForm" component, I get this "data" object and if I return a response in an action and if I return a response in an action this response is automatically parsed by r-r-d, just as it is the case for loaders. This "data" is the "data" I return on my backend in case of validation errors. And that would be an object with a general message (see events.js on backend) and nested errors object, which has different keys for the different inputs with more detailed error messages, (errors.date... title... image) if you wanna call it like this.
// 2.2 I could check if data is set because it will not be set if we haven't submitted the form yet, because that data is coming from an action. And then I check if I have this errors object, this nested errors object on my data.
// In which case I want to return or output an unordered list where I then use "Object.values" to loop through all my keys in this errors object and map my data here, the data that's stored for these different keys to list items. Every list item receives the special key prop, which is expected by React, and I set it equal to the error message I'm havening here, and I output the error message.
// So that's how I'm putting these validation errors I could be getting from the backend.
// 301. VALIDATING USER INPUT & OUTPUTTING VALIDATION ERRORS
