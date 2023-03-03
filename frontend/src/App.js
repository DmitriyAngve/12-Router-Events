import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
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

//

// 287. WHERE SHOULD LOADER() CODE BE STORED?
//
// You can move "loader()" code into component file.
// Recommendation - is that you do actually put that "loader()" code into your component file where you need it.
// Let's try that with "EventsPage" component file.
// GO TO Events.js --->>>
//
// CAME FROM Events.js
// STEP 2:
// 2.1 Import "loader" as "eventsLoader" (name is up to you).
// 2.2 "loader: eventsLoader" loader points to imported function
// 287. WHERE SHOULD LOADER() CODE BE STORED?

// 292. ERROR HANDLING WITH CUSTOMS ERRORS
// CAME FROM Error.js
// STEP 3:
// 3.1 Add error element on this Root Route and render our error page.
// With that, this page, this error page, will be displayed whenever we basically have any kind of error anywhere in our routes because even though I'm throwing an error in the loader of the "<EventsPage />". In deeply nested route error will bubble up. If we add new "errorElement" in nested route, that creats new error elements for this route. But we can also just have this Root level error element and the rror would bubble up until it reaches that route.
// 292. ERROR HANDLING WITH CUSTOMS ERRORS

//

// 295. DYNAMIC ROUTES & LOADER()S
// CAME FROM EventDetail.js
// STEP 3:
// 3.1 We have to add the "loader" property to the "<EventDetail>" page route, and import the "loader" from "EventDetail.js" as "eventDetailLoader"
// 3.2 "eventDetailLoader" set as a value for the loader property of this route definition.
// CAME BACK
// 295. DYNAMIC ROUTES & LOADER()S

//

// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES
// CAME FROM EditEvent.js
// These are two route definitions, "<EventDetailPage />" and "<EditEventPage />", and therefore two separate loaders would be needed. But actuaalu we don't have to repeat our code here.
// STEP 2:
// 2.1 Instead we can add a new route definition here where we set: "path: ":eventId",". The same path as we have it "<EventDetailPage />"
// Thas route doesn't render an element. I will not add element here.
// 2.2 Instead I just add "children" and the children and the children of these route will be route of "<EventDetailPage />", where I now set the path an empty string or set "index: true".
// 2.3 And route with "<EditEventPage />" where I remove dynamic path segment.
// 2.4 I want to add a loader to this route (I remove loader from first child) at this wrapper route.
// Theory: you can access loader data with use loader data with this special hook provided by r-r-d in any component that's on the same level or lower level than the route where the loader is added to.
// In this case this "loader: eventDetailLoader" whenever we visit route nested in route with that "loader".
// GO TO EditEvent.js --->>>
//
// CAME FROM EvetForm.js
// STEP 5:
// 5.1 To make sure that we use right loader (in our case it's a "loader: evensDetailLoader") So the data from this parent route we should add a special "id" property which we can add to route definitions. /// "id: "event-detail",".
// GO to EventDetail.js --->>>
// 296. THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES

//

// 298. WORKING WITH ACTION() FUNCTIONS
//
// STEP 1:
// 1.1 So to add an action to this new route we add the special action property. just like loader, action wants a function (just as with loaders we typically don't wanna add our action functions here in our route definitions file) but instead we want to keep that code close to the components to which it belongs.
// In this case GO TO NewEvent.js file --->>>
//
// CAME FROM NewEvent.js
// STEP 5:
// 5.1 Import this action from a "NewEvent" /// "import NewEventPage, { action as newEventAction } from "./pages/NewEvent";"
// 5.2 Use this "newEventAction" as a value for this action property on this route definition (where we define action) /// "{ path: "new", element: <NewEventPage />, action: newEventAction }"
// 5.3
// 298. WORKING WITH ACTION() FUNCTIONS

//

// 299. SUBMITTIMG DATA PROGRAMMATICALLY
// Let's show a defferent way of triggering such a action function.
// STEP 1:
// <Form> providing by r-r-d. This "<Form>" will automatically trigger the action function of the currently active route, so the route for which form was loaded.
// 1.1 Now you send the request to a different route by adding the action prop this "<Form>" component and setting this to any other path
// CAME FROM EventItem.js
// STEP 3:
// Since event item will be rendered as part of the "EventDetailPage" component, which is loaded for "EventDetailPage" route in App.js, we should add the action to this event detail route
// 3.1 Add "action" into route with "<EventDetailPage>".
// For the moment, I want to the action to this "<EventDetailPage>" route and in Eventdetail.js (where rendered <EventItem>) I will add theis action function.
// GO TO EventDetail.js --->>>
//
// CAME BACK from EventDetail.js
// STEP 5:
// 5.1 Now we import this action from EventDetailPage as "deleteEventAction"
// 5.2 And then assign this to the action property of this ("element: <EventDetailPage />,") route /// "action: deleteEventAction"
// How we can trigger this action?
// We need to trigger that action, and submit some data, so to say, programmatically. We can submit data and trigger an action programmatically with the special "useSubmit" hook.

// GO TO EventItem.js --- >>>

// 299. SUBMITTIMG DATA PROGRAMMATICALLY

// 302. REUSING ACTIONS VIA REQUEST METHODS
//
// STEP 5:
// 5.1 Remove "{ action as newEventAction }" and I instead import my action as "manipulateEventAction" /// "import { action as manipulateEventAction } from "./components/EventForm";"
// 5.2 "manipulateEventAction" add to both my "<NewEventPage>" route as well as to this "EditEventPage" /// "action: manipulateEventAction"
// 302. REUSING ACTIONS VIA REQUEST METHODS
