// import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm method="post" />;
}

export default NewEventPage;

// export async function action({ request, params }) {
//   const data = await request.formData();

//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };

//   const response = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(eventData),
//   });

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ message: "Could not save event." }, { status: 500 });
//   }

//   return redirect("/events");
// }
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

//

// 298. WORKING WITH ACTION() FUNCTIONS
// CAME FROM App.js
// STEP 2:
// 2.1 First of all create function /// "export async function action() {}"
// 2.2 In this function we can send request to the backend.
// Don't foget - this function on the client side, this is not backend code, and this function executes into browser. I can use any browser API (like localStorage).
// 2.3 Add "fetch" for send a request. Method - POST, and some data to the request (body). And here the data I wanna send is that data was submitted with the form.
// R-r-d makes handling form submissions a brace ("<EventForm>") and it helps with extracting data from that form.
// For that, you should go to that form --->>> GO TO EventForm.js
//
// CAME FROM EventForm.js
// STEP 4:
// 4.1 To get hold of that request that is captured by r-r-d and forwarded to that action we have to use the data that's passend to this action function, because just as a loader function is executed by r-r-d, and it receives an object that includes a couple of helpfull properties. To be precise again, the "request" and "params" properties.
// 4.2 "request" object contains the form data (from "EventForm"). To get hold of that form data, we have to call the special form data method on the "request" object and await it (stored in data const) /// "const data = await request.formData()".
// 4.3 On this "data" object we can call the ".get" method to get access to the different input field values that were submitted. /// "data.get("");"
// 4.4 To ".get()" we pass a string with the different identifiers of our input fields. ("name: "title" and others from EventForm), like this /// "const enteredTitle = data.get("title")".
// 4.5 For simplify we create object, where I have my title, which is set equal to the extracted "title".
// With help of the taht request we extract our submitted data.
// 4.6 Now with that, it's this "eventData" that should be sent to the backend, and we have to convert it to JSON. /// "body: JSON.stringify(eventData),"
// 4.7 In addition add "headers: { "Content-Type": "application/json" }" for send the data is handled and extracted correctly on the backend.
// 4.8 Store into "response"
// And than we can look into this "response" extract the return data and do whatever we need to do.
// 4.9 We can add "ifcheck" if it's maybe not okay and in that case throw an error response with that built-in JSON function, which we can get from r-r-d.
// And that would then display our "ErrorPage" if we throw error respose like this. This works for actions, as it worked for loaders. /// " throw json({ message: "Could not save event." }, { status: 500 })"
// With that action defined, we can go back to App.js --->>> GO TO App.js
// 298. WORKING WITH ACTION() FUNCTIONS

//

// 301. VALIDATING USER INPUT & OUTPUTTING VALIDATION ERRORS
// I wanna show such such validtion errors in frontend, right in New Event adding form, because that would discard all the values entered by the user and not really offer a good user experience. I wanna stay on this page, but I wanna output some data.
// STEP 1:
// 1.1 Outputting some data (as mentioned above) do this in actions by returning the data you wanna output above the form or anywhere in your routes. For that I will check if my "response" status code is equal to 422, which is that validation status code I'M setting on the backend in case of validation errors. If I have that status code, then I want to return my response. I'm returning the response I got back fro the backend if a have this 422 status code on the response.
// We can go to the EventForm.js, which is in the end rendered by the "NewEventPage" component --- >>>
// 301. VALIDATING USER INPUT & OUTPUTTING VALIDATION ERRORS

//

// 302. REUSING ACTIONS VIA REQUEST METHODS
// CAME FROM EventForm.js
// STEP 2:
// 2.1 Here I can set method to "post".
// GO TO EditEvent.js --- >>>
// 302. REUSING ACTIONS VIA REQUEST METHODS
