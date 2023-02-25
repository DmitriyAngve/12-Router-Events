// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EventDetailPage from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "events/:eventId", element: <EventDetailPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
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
// 5.2 Move all routes into this root route
// 283 ROUTING PRACTICE
