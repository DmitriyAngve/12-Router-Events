import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;

// 283 ROUTING PRACTICE

// STEP 6:
// Anhor elements here don't do anything, let fix it
// 6.1 Import "Link" from r-r-d if I wanna costruct a "Link".
// 6.2 Change <a> into <Link>.
// 6.3 Add "to=""" prop to define where those links should lead to.
// "<Link to="/">Home</Link>" - always want to go to starting page
// "<Link to="/events">Events</Link>".
// 6.4 "Link" change to "NavLink".
// 6.5 Now add a className as prop. This prop receives a function which gets an object automatically provided by r-r-d where we can get the "isActive" prop with help of desctructuring.
// 6.6 And use "isActive" prop to dynamically add the active class, which is defined in MainNavigation.module.css file.
// 6.7 Add "end" prop to avoid the case when the link is always active.
// NOW GO TO Events.js --->>>
// 283 ROUTING PRACTICE
