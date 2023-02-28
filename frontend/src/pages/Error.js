import PageContent from "../components/PageContent";

function ErrorPage() {
  return (
    <PageContent title="An error courred!">
      <p>Something went wrong!</p>
    </PageContent>
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
// We might to differentiate 404 error and other errors like error from our loader, where we actually have an error message that we might wanna display instead of the default error message. So to differentiate between errors is instead of throwing a object, we can throw a response by again creating a new reposnse. And then we can include some data into that response.
// 293. EXTRACTING ERROR DATA & THROWING RESPONSES
