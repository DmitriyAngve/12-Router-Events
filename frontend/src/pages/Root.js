import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const events = useLoaderData();
  // console.log(events);
  return (
    <>
      <MainNavigation />
      <main>
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
