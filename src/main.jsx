// react redux
//Dashboard
//query client
import "./index.css";
import AdminRouteProtect from "./routeProtect/AdminRouteProtect";
import DashboardFixtures from "./pages/DashBoard/DashboardFixtures";
import DashboardIndex from "./pages/DashBoard";
import DashboardNews from "./pages/DashBoard/DashboardNews";
import DashboardPlayers from "./pages/DashBoard/DashboardPlayers";
import DashboardPtTbl from "./pages/DashBoard/DashboardPtTbl";
import DashboardResults from "./pages/DashBoard/DashboardResults";
import DashboardRoot from "./pages/DashBoard/DashboardRoot";
import DashboardTeams from "./pages/DashBoard/DashboardTeams";
import FixturePage from "./pages/fixture-page/FixturePage";
import HomePage from "./pages/LandingPage/HomePage";
import HomePageRoot from "./pages/LandingPage/HomePageRoot";
import Login from "../src/components/Login/Login";
import News from "./pages/News/News";
import NewsAddForm from "./components/News/NewsAddForm";
import NewsFullDetails from "./components/News/NewsFullDetails";
import NoPageFound from "./pages/NoPageFound/NoPageFound";
import Players from "./pages/Players/Players";
import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./components/Register/Register";
import Result from "./pages/Result/Result";
import Teams from "./pages/Teams";
import store from "./redux-store/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageRoot />,
    errorElement: <NoPageFound />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsFullDetails />,
      },
      {
        path: "players",
        element: <Players />,
      },
      {
        path: "results",
        element: <Result />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "fixtures",
        element: <FixturePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NoPageFound />,
  },
  {
    path: "/admin",
    element: (
      <AdminRouteProtect>
        <DashboardRoot />
      </AdminRouteProtect>
    ),
    errorElement: <NoPageFound />,

    children: [
      { index: true, element: <DashboardIndex /> },
      {
        path: "players",
        element: <DashboardPlayers />,
      },
      {
        path: "teams",
        element: <DashboardTeams />,
      },
      {
        path: "news",
        element: <DashboardNews />,
      },
      {
        path: "addnews",
        element: <NewsAddForm />,
      },
      {
        path: "fixtures",
        element: <DashboardFixtures />,
      },
      {
        path: "results",
        element: <DashboardResults />,
      },
      {
        path: "pointtable",
        element: <DashboardPtTbl />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
