import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./component/layout";
import Home from "./route/home";
import Profile from "./route/profile";
import Login from "./route/login";
import SignUp from "./route/signup";

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

function App() {
  return (
    <div>
      <div>Hello world!</div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
