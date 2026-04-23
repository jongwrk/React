import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import styled, {
  createGlobalStyle,
} from "styled-components";
import reset from "styled-reset";
//
import Layout from "./component/layout";
import Loading from "./component/loading";
import Home from "./route/home";
import Login from "./route/login";
import Profile from "./route/profile";
import SignUp from "./route/signup";
//
import Guard from "./component/guard.tsx";
import { AUTH } from "./firebase.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Guard>
        <Layout />
      </Guard>
    ),
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

const Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
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
    <Wrapper>
      <GlobalStyle />
      {isLoading ? (
        <Loading />
      ) : (
        <RouterProvider router={router} />
      )}
    </Wrapper>
  );
}

export default App;
