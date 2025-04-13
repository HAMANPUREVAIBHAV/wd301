// import TaskApp from "./TaskApp";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from "./Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Notfound  from "./pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Navigate to="/signin" replace/>)
  },
  {
    path: "/signin",
    element: (<Signin />)
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element:<ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],
  },
   // Wildcard route to redirect any unknown path to /notfound
   {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;