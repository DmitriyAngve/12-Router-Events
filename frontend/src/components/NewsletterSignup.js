import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;

// 303. Behind-the-Scenes Work with useFetcher()
//
// STEP 1:
// We would have to add the action to all routes what would be a lot of code duplication and also clash with other actions that we might need for our routes. Now this is such a common use case thar React has a solution for it.
// 1.1 The solution is a special hook which you can import, that is the "useFetcher" hook
// 1.2 This hook, when executed, gives you an object. And this object includes a bunch of properties and methods. "fetcher" should basically be used whenever you wanna trigger, an action (or loader) without actually navigating to the page to which the loader belongs
// We can use "fetcher" like this "<fetcher.Form method="post" className={classes.newsletter}>"
// 1.3 On this "<fetcher.Form..." we can add  the cation attribute (for example: "action="/newsletter""), because I know that I wanna trigger the action off that newsletter route, but I wanna make sure< that I don't load that route's component. I don't wanna load the element that belongs to this route.
// If  we use "Fetcher", we don't transition, we don't move to a different route.
// We can get a feedback by using other properties provided by "Fetcher" because "useFetcher" hook, is basically the tool you should use if tou wanna interact with some action or a loader without transitioning. So if you wanna send your request behind the scenes, without triggering any route changes.
// "Fetcher" object also includes a bunch of properties that help you understand whether your action or loader that you triggered succeeded.
// 1.4 We can use object destructuring to pull out that data property, that data object, which is returned by the action or loader that's being triggered. And also get hold of a state object or a state value to be precise, which is equal to idle loading or submitting.
// The state you get "<fetcher.Form..." instead tells you whether the "Fetcher" behind the scenes completed its loader or action that was triggered. So we can use this to update the UI accordingly.
// 1.5 We can "useEffect()" and trigger a function whenever data and state changed.
// 1.6 We can check if state is equal to idle, which means we're not executing an action and "ifcheck" if we got data and message property (newsletter does return an object). And  if that's all the case, we could use the built in alert function ("window.alert(data.message);")
// 303. Behind-the-Scenes Work with useFetcher()
