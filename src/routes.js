import { prepareRoutes } from "@curi/router";

import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import EmailRegistration from "./components/EmailRegistration";

export default prepareRoutes([
  {
    name: "SignIn",
    path: "",
    response() {
      return {
        body: SignIn
      };
    }
  },
  {
    name: "Welcome",
    path: "welcome",
    response() {
      return {
        body: Welcome
      };
    }
  },
  {
    name: "EmailRegistration",
    path: "email-registration",
    response() {
      return {
        body: EmailRegistration
      };
    }
  }
]);