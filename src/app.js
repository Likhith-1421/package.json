import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import Card from "./Components/Card";
import Body2 from "./Components/Body2";
// import Aboutus from "./Aboutus";
// import Contact from "../Contact";
import Error from "./Error";
import Login from "../Login";
// import Discount_card from './Components/Discount-card';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "../Login";
import ProblemSolve from "./ProblemSolve";
import RestratentMenu from "./Components/RestratentMenu";
import Trail from "./Components/Trail";
import Usercontext from "../Usercontext";

import Cart from "./Cart";
import "./likhith.css";

// const Groceary = lazy(() => import("./Components/Groceary"));
import Groceary from "./Components/Groceary";
const Aboutus = lazy(() => import("./Aboutus"));
const Contact = lazy(() => import("../Contact"));

const AppLayout = () => {
  // const [UserName, setUserName] = useState();
  // useEffect(() => {
  //   const data = {
  //     matter: "Likhithh",
  //   };
  //   setUserName(data.matter);
  // });
  // console.log(UserName)
  return (
    <div className="black">
      <Header />

      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Card />,
      },

      {
        path: "/Aboutus",
        element: (
          <Suspense fallback={<h4>Loading...</h4>}>
            <Aboutus />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Login",
        element: (
          <Suspense fallback={<h4>Loading....</h4>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/ProblemSolve",
        element: <ProblemSolve />,
      },
      {
        path: "/restratentmenu/:resId",
        element: <RestratentMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Groceary",
        element: (
          <Suspense fallback={<h4>Loading....</h4>}>
            <Groceary />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("Likhith"));
root.render(<RouterProvider router={appRouter} />);
