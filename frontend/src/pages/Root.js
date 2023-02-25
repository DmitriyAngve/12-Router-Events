import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
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
