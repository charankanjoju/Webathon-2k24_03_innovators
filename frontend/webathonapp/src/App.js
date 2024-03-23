import Root from "./comp/Root";
import Home from "./comp/Home";
import Register from "./comp/Register";
import Login from "./comp/Login";
import Contactus from "./comp/Contactus"
import Aflogin from "./comp/Aflogin";
import Afalumni from "./comp/Afalumni";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";


function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "contactus",
          element: <Contactus />,
        },
        {
          path: "aflogin",
          element: <Aflogin />
        }
      ],
    },
  ]);

  return (
    <div>
      {/* Provide browserRouter object to app */}
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;