import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import BodyComponent from "./components/Body";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import ProfileChild from "./components/ProfileChild";
import RestaurantReview from "./components/RestaurantReview";

const Instamart = lazy(() => import("./components/Instamart"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            children: [
              {
                path: "profileChild",
                element: <ProfileChild />,
              },
            ],
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/restaurant/:resId/review",
        element: <RestaurantReview />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
