import React from "react";

//Layout
import DashboardLayout from "./Component/DashBoard/Layout";

//Session Components
import Land from "./Land";
import GroupedList3 from "./Component/Session/Session";
import Agenda from "./Component/Agenda/agenda";
import Vault from "./Component/Vault/vault";

import About from "./About";
import NoMatch from "./NoMatch";
import Testpg from "./anothertestpg";

import LoggedinUsers from "./Component/AdminComponents/LoggedInUsers";
import RegisteredUsers from "./Component/AdminComponents/RegisteredUsers";
import AddUsers from "./Component/AdminComponents/AddUsers";

import Stats from "./Component/AdminComponents/Stats/Stats";
import Settings from "./Component/AdminComponents/Settings/Settings";
import EventDetails from "./Component/DashBoard/Events/EventDetails";

import SignIn from "./login/signin";
import SignUp from "./login/signup";
import LandingPage from "./LandingPage";

import Test from "./Component/ChatComponents/Test"

// // Declarative routing model
// return (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Land} />
//         </Switch>
//     </Router>
// )

//Programmatic routing model this basically contains all the routes for the applications, new routes must be added to this array after the components are created.
const routes = [
  {
    path: "/index",
    element: <LandingPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/Message",
    element: <Test />
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <GroupedList3 /> },
      {
        path: "/event-manage",
        element: <EventDetails />,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/vault",
        element: <Vault />,
      },
      {
        path: "/loggedinUsers",
        element: <LoggedinUsers />,
      },
      {
        path: "/registeredusers",
        element: <RegisteredUsers />,
      },
      {
        path: "/addusers",
        element: <AddUsers />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },

      { path: "*", element: <NoMatch /> },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;
