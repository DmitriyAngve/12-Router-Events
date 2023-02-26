// import { Outlet, useLoaderData } from "react-router-dom";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const events = useLoaderData();
  // console.log(events);

  const navigation = useNavigation();

  // navigation.state === "submitting"

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

// 283 ROUTING PRACTICE
//
// 4.1 Create "RootLayout"
// 4.2 Added <Outlet />
// 4.2.1 Added <MainNavigation />
// 4.3.1 import <Outlet>
// 4.3.2 import <MainNavigation>
// 4.4 Outlet defines where the content of the child routes should be rendered
// Now Root Component defined --->>> GO BACK to App.js
// 283 ROUTING PRACTICE

// 286 MORE LOADER() DATA USAGE
// CAME FROM EventsList.js !!!
// STEP 3:
// 3.1 Import "useLoaderData" and calling that hook here.
// 3.2 "console.log(events);" for checking - this not work than I expected -> instead, it logs undefined.
// The reason for that is that I'm trying to get data from a route that's actually defined on a lower level. I'm trying to get data that's loaded from route ("path: "events",element: <EventsRootLayout />,children: [") in this root route (" path: "/",element: <RootLayout />,children: ["), which is on a much higher level.
// After all this is deeply nested route, and that's not possible.
// Instead, you can access loaded data with help of "useLoadedData" in any component on the same level or lower level than the component where you added the loader, so the route on which you added the loader.
// GO TO Events.js --->>>
// 286 MORE LOADER() DATA USAGE

//

// 289. REFLECTING THE CURRENT NAVIGATION STATE IN THE UI
//
// STEP 1:
// React Router gives us a special hook, which we can use to check the current route transitions state. So, to find out if a transition has been initiated and we're currently still waiting for data to arrive, or if we're done.
// 1.1 import "useNavigation" hook, which is a hook provided by r-r-d, that lets us find out whether we're currently in an active transition, if we're lading data, or if we have no active transition going on.
// 1.2 we get a navigation object when we call "useNavigation" and that Navigation object has a couple of properties, but "state" property is the most important one.
// This is simply a string which is either idle, loading, or submitting depending on whether we don't have any active route transition, if we're having an active transition and we're loading data, or if we're submitting data
// 1.3 With that, we could add a Loading text here /// "<p>Loading...</p>" /// which is only shown if "navigation.state==="loading""
// "{navigation.state === "loading" && <p>Loading...</p>}" With that added, if we click "Home" and back "Events", you see that "Loading..." text, which signals to the user that we are loading data (gives the users some feedback that something is happening)
// 1.4 Comment this string, because in later I will see the better solution
// 1.5 Remove "setTimeout" from route/events.js file
// 289. REFLECTING THE CURRENT NAVIGATION STATE IN THE UI
