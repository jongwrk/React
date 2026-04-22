import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
//
import Layout from "./component/layout";
import Home from "./route/home";
import Profile from "./route/profile";
import Login from "./route/login";
import SignUp from "./route/signup";
import Loading from "./component/loading";
//
import { AUTH } from "./firebase.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
  background-color: black;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  async function initAuth() {
    // wait for firebase

    await AUTH.authStateReady();
    setIsLoading(false);
  }

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <Loading />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
