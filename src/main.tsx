import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Explore from './pages/Explore.tsx';
import CreateCat from './pages/CreateCat.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import EditCat from './pages/EditCat.tsx';
import Profile from './pages/Profile.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Explore",
        element: <Explore />,
      },
      {
        path: "createCat",
        element: <CreateCat />,
      },
      {
        path: "EditCat",
        element: <EditCat/>,
      },
      {
        path: "Profile",
        element: <Profile/>
      }
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}/>
);
