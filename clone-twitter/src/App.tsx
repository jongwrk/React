import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import styled, {
  createGlobalStyle,
} from "styled-components";
import reset from "styled-reset";
//
import Guard from "./component/Guard.tsx";
import Layout from "./component/Layout.tsx";
import Home from "./route/Home.tsx";
import Login from "./route/Login.tsx";
import Profile from "./route/Profile.tsx";
import SignUp from "./route/Signup.tsx";

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
  return (
    <Wrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
