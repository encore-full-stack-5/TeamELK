import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SIgnup.jsx";
import Layout from "./pages/Layout.jsx";
import Playlists from "./pages/Playlists.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/join", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/playlist", element: <Playlists /> },
    ],
  },
  // {
  //   path: "/",
  //   element: <Counter />,
  // },
  {
    path: "/join",
    element: <Signup />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </RecoilRoot>
);
