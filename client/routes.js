import React from "react";
import { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch, useRoutes } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom'; //v5
import { ThemeProvider } from "@mui/material/styles";

import App from './App';
import Table1 from './Component/DashBoard/Tables/Table1'
import DashboardLayout from './Component/DashBoard/Layout';

//Session Components
import Land from './Land';
import GroupedList3 from './Component/Session/Session';
import Agenda from './Component/Agenda/agenda'
import Vault from './Component/Vault/vault'

import About from './About';
import NoMatch from './NoMatch';
import Testpg from './anothertestpg';
import Table from './Component/DashBoard/Tables/Table'
import EventDetails from "./Component/DashBoard/Events/EventDetails";
import List from './List'
import ContentMessage from './ContentMessage';
import InteractionPanel from "./Interactions";
import Login from "./Login";
import Docs from "./Component/DashBoard/Documentations/Docs";
import SignIn from "./login/signin";

import LoggedinUsers from './Component/AdminComponents/LoggedInUsers';
import RegisteredUsers from './Component/AdminComponents/RegisteredUsers';
import Stats from './Component/AdminComponents/Stats/Stats';
import Settings from './Component/AdminComponents/Settings/Settings'

// // Declarative routing model v5
// return (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Land} />
//             <Route path="/about" component={Land} />
//         </Switch>
//     </Router>
// )

//Programmatic routing model v6
const routes = [
    { path: '/', element: <Login /> },
    {
        path: '/agenda',
        element: <Agenda />,
    },
    {
        path: '/vault',
        element: <Vault />,
        // children: [
        //     { index: true, element: <Testpg/> },
        // ]x
    },
    {
        path: '/loggedinUsers',
        element: <LoggedinUsers />
    },
    {
        path: '/registeredusers',
        element: <RegisteredUsers />
    },
    {
        path: '/stats',
        element: <Stats />
    },
    {
        path: '/settings',
        element: <Settings />
    },
    { path: 'docs', element: <Docs /> },
    {
        path: 'about',
        element: <About/>,
        children: [
            {
                path: '/about', element: <NoMatch/>
            }
        ]
    },
    // {
    //     path: 'about',
    //     element: <About />,
    //     children: [
    //         {
    //             path: '/about', element: <NoMatch />
    //         }
    //     ]
    // },
    {
        path: 'signin',
        element: <SignIn />
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'table1',
                element: <Table1 />
            },
            { index: true, element: <GroupedList3 /> },
            {
                path: 'event-manage',
                element: <EventDetails />,
            },
            {
                path: 'test',
                element: <Testpg />,
                // children: [
                //     { index: true, element: <Testpg/> },
                // ]x
            },
            {
                path: 'table',
                element: <Table />,
            },
            {
                path: 'list',
                element: <List />,
            },
            {
                path: 'ContentMessage',
                element: <ContentMessage />,
            },
            {
                path: "interaction",
                element: <InteractionPanel />,
            },
            { path: "*", element: <NoMatch /> }
        ]
    },
    {
        path: '/',
        element: <DashboardLayout />
    },

    // },
    // // {
    //     path: '/about',
    //     element: <About />,

    //     children: [
    //         { index: true, element: <Testpg /> },
    //         {
    //             path: '/about',
    //             element: <About />,
    //             children: [
    //                 { index: true, element: <About /> },
    //             ]
    //         },
    //         { path: "*", element: <NoMatch /> }
    //     ]

    // },


  // },

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;