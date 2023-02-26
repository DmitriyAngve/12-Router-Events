import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EventDetailPage from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// 283 ROUTING PRACTICE
//
// STEP 1:
// 1.1 Let's import from r-r-d: 1) "RouterProvider" - needed to apply and activate our route definitions 2) "createBrowserRouter" - the function that allows us to create this route definitions.
// With two imports added, we can create our "router" by calling "createBrowserRouter".
// 1.2 We need another imports: "createRoutesFromElements" and use these JSX elements to define your routes or if you want to pass an array to "createBrowserRouter" and then use these objects to define the routes.
// 1.3 in router I start from route for my root route (slash nothing) where the element is the "HomePage", that is the page that should be loaded if we are on our domain slash nothing.
// 1.4 Add another route which is slash events ("/events") and other...
// 1.5 "/events/:eventId"
// 1.5 "/events/new"
// 1.6 "/events/:eventId/edit" /// ":eventId" - dynamic segment /// "edit" - hardcoded segment
// STEP 2:
// 2.1 Now we can render the RouterProvider component and set the "router" prop to our "router" object that contains these route definitions.
// STEP 3:
// Next step is to add a root layout that adds the "MainNavigation" component around all pages in the end.
// 3.1 That can be done be adding a special new route which will be a parent route and here I want to render an element which is a route I have yet to add. Create "Root.js"
// GO TO Root.js --->>>
//
// CAME from Root.js
// STEP 5:
// 5.1 to father route add "element: <RootLayout>" with "children: []"
// 5.2 Move all routes into this root route.
// 5.3 Change path from absolute to relative paths (deleting slash), so that they are relative to the path defined in the parent route in the route definitions.
// 5.4 Turns first children route for the <HomePage /> into "index" route.
//
// Now GO TO MainNavigation.js --->>> to add a working links

// CAME FROM EventDetail.js
// STEP 9:
// 9.1 Add a new route definition where the path is events (not /events), I want to have relative to this parent route path. The add "element" is a new page, which we have yet to add, which is the EventsRoot.js
// 9.2 Create EventRoot.js
//
// CAME FROM EventsRoot.js
// 9.3 Add to new route "element: <EventsRootLayout>".
// 9.4 And add this "children" property and move all routes below.
// 9.5 After this removes all "events/" from "path".
// Now all URL path is combination of "/" + "events" + ...
// 9.6 Path of first children turned into a index route
// 283 ROUTING PRACTICE

// 284 FATA FETCHING WITH LOADER()
//
// STEP 1:
// In r-r-d version < 6 You don't have to write all code (in Events.js) for fetching data from API. R-r-d helps you with all of that by giving you an extra property which you can add to your route definitions.
// 1.1 Look at route with <EventsPage />, we can add an extra property to that route definition of that page => "loader: () => {}" property.
// "loader: () => {}" is a property that wants a function as a value, a regular function or an error function that does not matter. This function executed by a r-r-d whanever you are about to visit this route => in other words: just before this JSX code (<EventsPage />) gets rendered, "loader: () => {}" function will be triggered and executed by a r-r-d.
// GO TO Events.js and take code where we fetch the data and where we evaluate the response, cut that and move it into this "loader" function.
// 1.2 Add "async" keyword.
// 1.3 Remove any state value, don't need here
// We wanna get that data to that <EventsPage /> component, because that's where we need the data.
// When you define such a "loader" function, r-r-d will automatically take any value you return in that function, for example, the "resData" data and will make that data available "return resData;" in that page that's being rendered here (in <EventsPage />) as well as any other components where you need it.
// 1.4 To be precise I wanna return "resData.events", because my "resData" object is actually an object that will have an events proprety which holds the actual array of events. That's simply how the backend API return the response for this request. We must access ".events" to get that array of dummy events from the backend.
// With that, thus "resData" is made available to the "<EventsPage />" and any other components that need the data.
// 284 FATA FETCHING WITH LOADER()

//

// 285. USIMG DATA FROM A LOADER IN THE ROUTE COMPONENT
//
// How do we now get access to that data returned by our loader?
// For that we have to go to the component where we want to use it ---> GO TO Events.js
//
// 285. USIMG DATA FROM A LOADER IN THE ROUTE COMPONENT
