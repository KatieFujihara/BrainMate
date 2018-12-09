import { prepareRoutes } from "@curi/router";

import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";
import { FirebaseContext } from './components/Firebase';


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
    name: "Registration",
    path: "registration",
    response() {
      return {
        body: Registration
      };
    }
  }
]);
