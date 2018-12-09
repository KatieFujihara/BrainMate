import { prepareRoutes } from "@curi/router";

import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";


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
//     children: [
//       {
//         name: "Method",
//         path: ":method",
//         response() {
//           return {
//             body: Method
//           };
//         }
//       }
//     ]
//   },
//   {
//     name: "Not Found",
//     path: "(.*)",
//     response() {
//       return {
//         body: NotFound
//       };
//     }
  }
]);