import PageContent from "../components/PageContent";

import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  // error.status;

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    // message = error.data.message;
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;

// 292. ERROR HANDLING WITH CUSTOMS ERRORS
// CAME FROM Events.js
// STEP 2:
// 2.1 Create "ErrorPage"
// GO TO App.js --->>>
// 292. ERROR HANDLING WITH CUSTOMS ERRORS

// 293. EXTRACTING ERROR DATA & THROWING RESPONSES
// STEP 1:
// 1.1 Added new Component PageContent.js
// 1.2 Use it component to render here on this "ErrorPage".
// 1.3 We can set a title property and set to an error occured "return <PageContent title="An error courred!" />"
// 1.4 And we can then also pass some content: "<p>Something went wrong!</p>"
// We might to differentiate 404 error and other errors like error from our loader (in Events.js), where we actually have an error message ("throw { message: "Could not fetch events." };") that we might wanna display instead of the default error message.
// 293. EXTRACTING ERROR DATA & THROWING RESPONSES

// 293. EXTRACTING ERROR DATA & THROWING RESPONSES
// CAME FROM Error.js
// STEP 3:
// 3.1 Add this special hook /// "import { useRouteError } from "react-router-dom";"
// 3.2 This hook gives us an error object, and the shape of that object now depends on whether you threw a response or any other kind of object or data. /// "import { useRouteError } from "react-router-dom"".
// If you threw a response as I'm doing it here now, this error object will include a ".status" field, which actually reflects the status of the response you threw. (in this case, that would be 500 (from Events.js))
// If you threw any kind on object, like a regular JS object then this error object would already be that thrown object. So the there would not be this special status property. But that's why you might wanna throw response instead of regular objects because it does allow you to include this extra status property, this extra status field, which helps with build a generic error handling component. Because now an error JS in this "ErrorPage", we can create our "title" and our "message" and set these two default values, but overwrite them with more fitting values based on which error we have.
// 3.3 Add: "let title = "An error occured!";let message = "Something went wrong!";" - like a default.
// 3.4 Then we can check if "error.status" is maybe 500, in which case we might want to keep the title. But set the message to "error.data.message"
// Now "error.data" gives as access to the data that's included in error Response (from Events.js) that was thrown. So, to this object "{message: "Could not fetch events.", status: 500}" from Events.js. That object had a message and we can assume that most objects that are included in error response will have message properties. That's why I'm accessing the "data" object ("message = error.data.message;") of the error response and then the message property here.
// But we could also check if the error status is maybe 404, which is default status set by r-r-d if you enter a path that's not supported.
// 3.5 In that case we could set the "title" - Not Found, and "message..."
// And now we can use these (title and message) values down here and set the "title" in JSX code.
// One last thing - this this "error.data.message" converted back to an object because it's still JSON in JSON format.
// 3.6 Must use "JSON.parse" and access message on the parse data. /// "message = JSON.parse(error.data).message"

// SUMMARY :
// We might want to throw responses in places where things go wrong and add such a generic error handling page which is rendered with help of an error element added to the root route. tHAT'S ONE WAY OF HANDLING ERRORs and embrassing those features that are built into r-r-d
// STEP 4:
// 4.1 Improve this error page even more by maybe also adding our navigation here.
// 293. EXTRACTING ERROR DATA & THROWING RESPONSES
