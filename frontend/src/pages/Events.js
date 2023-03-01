// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "Some event",
//   },
//   {
//     id: "e2",
//     title: "Another event",
//   },
// ];

// function EventsPage() {
//   return (
//     <>
//       <h1>EventsPage</h1>
//       <ul>
//         {DUMMY_EVENTS.map((event) => (
//           <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default EventsPage;

import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
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
    return response;
  }
}

// 283 ROUTING PRACTICE
// STEP 7:
// 7.1 Add some DUMMY EVENTS array
// 7.2 In JSX I want to display this list of events. Every event should then be turned into a list item.
// GO TO EventDetail.js --->>>
// 283 ROUTING PRACTICE

// 285. USIMG DATA FROM A LOADER IN THE ROUTE COMPONENT
// STEP 1:
// 1.1 Rid all that state management and "useEffect" and get rid <div> which shows my loading and error state. Rid "ifcheck".
// 1.2 And now to get access to the data returned by the "loader" function for this page, we can import /// "import { useLoaderData } from "react-router-dom";". This is a special hook which we can execute to get access to the closest loader data
// 1.3 Call "const events = useLoaderData()" I named t "events" since we know that it will be a list of events in case of this component here ("<EventsPage>")
// And "events" will really be that data returned by that "loader" from App.js. Loader function will return a Promise (because I use an "asyncawait"). Any data will be wrapped by a promise.
// But r-r-d will actually check if a promise is returned and automatically get the resolved data from that promise for you.
// This "events" now it's this "events" object this array of events, which we can pass a value tp this events prop on events list.
// 285. USIMG DATA FROM A LOADER IN THE ROUTE COMPONENT

// 286 MORE LOADER() DATA USAGE
//
// STEP 1:
// Let's see where else we could use this "useLoaderData" hook.
// We can use "useLoaderData" in this "EventsPage()", which is rendered by the route on which we added the loader, well we could also use it directly inside the "EventList" component
// 1.1 Instead of using it (useLoaderData) we could go to this "EventsList" component and use this hook there.
// GO TO EventsList.js --->>>

// CAME FROM Root.js !!!
// STEP 4:
// 4.1 Use the "useLoaderData" in the "EventsPage" component and bring back the "events" prop on which I pass my "events" queue EventsList.js
// 4.2 Rid out "useLoaderData" from EvetsList.js and bring back this object destructure
// 286 MORE LOADER() DATA USAGE

//

// 287. WHERE SHOULD LOADER() CODE BE STORED?
// CAME FROM App.js
// STEP 1:
// 1.1 Export a function which we could name loader.
// 1.2 Put your code, your loader code into that function.
// 1.3 Turn into async function
// GO BACK INTO App.js
// 287. WHERE SHOULD LOADER() CODE BE STORED?

//

// 288. WHEN ARE LOADER() FUNCTIONS EXECUTED?
//
// STEP 1:
// Before going deeper I wanna clarify when exactly that "loader" is executed.
// The loader for a page will be called right when we start navigating o that page. No after the page component has been rendered, but before we actually go there. And you can see that that's the case if you go to the backend API => routes folder => events.js
// Look at first route - that's responsible for returning data to the frontend.
// 1.1 Add in events.js (backend) "setTimeout()"
// 1.2 Move "res.json" code into the timeout callback function
// This will simply ensure that the response is only sent back from the backend to the frontend after one and a half second (1500 ms). This delay show you how this is reflected on the frontend.
// React router will actually wait for the data to be fetched, so for the loader to be finished before it then renders the page with the fetched data.
// The advantage of this approach is that you can rely on the data being there once the "EventsPage" component is being rendered. You don't need to worry about whether the data is there yet or not, and therefore you don't need to render a loading state on this events page component
// 288. WHEN ARE LOADER() FUNCTIONS EXECUTED?

// 290. RETURNING RESPONSES IN LOADER()S
//
// STEP 1:
// One important aspect of a loader is to understand that you can return any kind of data in that loader.
// In this case I return an array of events ("resData.events").
// But we could return a number, text, an object... and what you can also return is a response object.
// What i mean: in browser you can create a new response object, which I'll name res, here, by instantiating the built-in response constructor function. /// "const res = new Response();" - this is a modern browser feature. You can build your own responses.
// Important to understand - code of this "loader" will not execute on a server, this is still all happening in the browser, even though it's not in a component it's still in a browser (still client-side code).
// 1.1 Now, this response constructor also takes any data of your choice as a first argument and then you can configured it with greater detail with help of an extra object that can be set as a second argument. /// "const res = new Response("any data", { status: 201 })"
// 1.2 Now, whenever you return such a response in your loaders, the React Router package will automatically extract the data from your response when using "useLoaderData"
// 1.3 Add "return res".
// So the data returned by "useLoaderData" will still be the response data that was part of the response you returned in your loader.
// Now, combined with React Router's support for these response objects and t's automatic data extraction, that simply means that you can take that reposnse, which you get ("const response = await fetch("http://localhost:8080/events");") and return that in your loader.
// You don't need to manually extract data from the response. Instead, you can return your response (like this: "const resData = await response.json();return resData;" => "return response") with or without checking whether it's okay.
// Now, we can just return the response like this and "useLoaderData" will then automatically give us the data that's part of the response.
// 1.4 "const data = useLoaderData();" /// "events" => to "data".
// 1.5 Nowm I just have to make sure that I do extract my "events" fro, that data object which I get here, because that is ("data") actually an object with an events key, just s I extracted events from the response data in my loader.
// 290. RETURNING RESPONSES IN LOADER()S

//

// 292. ERROR HANDLING WITH CUSTOMS ERRORS
//
// STEP 1:
// Now it's move on to error handling because of course fetching the data could go wrong, Now we're not handling errors anymore.
// For example here when we see that the response is not okay, if it has a 400ish or 500ish status code, what we can do in that case is we can return a different response, or just return an object (doesn't have to be a response). where we could add "isError" key and a message.
// 1.1 Add "return { isError: true, message: "Could not fetch events." };"
// So now we return this data package instead of the response returnde by our API request.
// 1.2 In component code we could now simply check "if(data.isError)" if "isError" property exist we could return a paragraph where we output "data.message" /// "return <p>{data.message}</p>;"
// If I now deliberately break this code by sending the request to a path that doesn't exist on the backedn, you will see that I get this.
// So that one-way of handling errors, simply returning data that indicates that we have an error and then using that data appropriately in the component
// 1.3 As an elternative to returning this data to the component, we could throw an error. For  this we can construct a new error object "throw new Error()" with the built in error constructor, or we throw any other kind of object as an error.
// Now, when an error gets thrown in a loader something special happens. React Router will simply render the CLOSEST error element.
// We can add an Error.js page.
// GO TO --- >>> Error.js
// 292. ERROR HANDLING WITH CUSTOMS ERRORS

//

// 293. EXTRACTING ERROR DATA & THROWING RESPONSES
// CAME FROM Error.js
// STEP 2:
// 2.2 So to differentiate between errors is instead of throwing a object, we can throw a response by again creating a new response. And then we can include some data into that response. /// "throw new Response();"
// 2.3 For this we call "JSON.stringify({})" if we wanna pass an object to the response.
// 2.4 And we can add a message prop and say "Could not fetch events."
// 2.5 And now we can add this second argument to the response constructor and set the status to 500 to indicate that something went wrong on the back end.
// I'm doing this because you can actually get hold of the data that's being thrown as an error inside of the component that's being rendered as an error element. And for that r-r-d gives you another special hook.

// GO TO Error.js --->>>

// 293. EXTRACTING ERROR DATA & THROWING RESPONSES

// 294. THE JSON() UTILITY FUNCTION
// STEP 1:
// 1.1 Instead of creating your response like this "throw new Response( JSON.stringify({ message: "Could not fetch events.", status: 500 }));" - you can return the result of calling JSON "return json()".
// A "json()" is a function imported fron r-r-d. "json()" is a function that creates a response object that includes data in the json format.
// 1.2 To this json fucntion, you simply pass your data that should be included in the response, and you don't need convert it to "JSON" manually. And pass the second argument where you can set extra response metadata like this "status" - set this "status" like 500.
// Now with  "json({})" you don't just have to type less code here, but in the place where you use that response data you also don't have to parse the "json" format manually.
// 294. THE JSON() UTILITY FUNCTION
