import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;

// 283 ROUTING PRACTICE
// Here I wanna use this "EventsRootLayout" component as a wrapper around other pages, where the content of those pages should be rendered in this place where I have this "Outlet" component as a marker
// GO BACK to App.js
// 283 ROUTING PRACTICE
