// createBrowserRouter is a function that creates a router object that can be used to define the routes of our app/website
// Navigate is a component that allows us to navigate to a different route
// RouterProvider is a component that provides the router object to the rest of the app so that we can use it to navigate
// Outlet is a component that allows us to render the children of a route
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";

//importing all our pages
import AllStudents from "./pages/allStudents";
import Student from "./pages/Student";
import EditStudent from "./pages/editStudent";
import Home from "./pages/home";
import Login from "./pages/login";
import Page404 from "./pages/page404";

//importing all our components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FunctionComponent } from "react";

function App() {
  //defining the layout of our app/website
  const Layout: FunctionComponent = () => {
    return (
      <div>
        <Navbar />

        <div>
          <Outlet />
        </div>

        <Footer />
      </div>
    );
  };

  //defining the routes of our app/website
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, //specifying we are using the layout componen
      children: [
        { path: "/students", element: <AllStudents /> }, //specifying the all students route
        { path: "/students/:id", element: <Student /> }, //specifying the route for each student
        { path: "/students/:id/edit", element: <EditStudent /> }, //specifying the edit student route
        { path: "/", element: <Home /> }, //specifying the homepage route
      ],
    },
    {
      path: "/login", //specifying the login route
      element: <Login />,
    },
    {
      path: "*", //specifying the 404 route, if the user enters a route that does not exist
      element: <Page404 />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
