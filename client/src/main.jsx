import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SIgnup.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import MusicBoards from "./pages/MusicBoards.jsx";
import Playlists from "./pages/Playlists.jsx";

import Modal from "react-modal";

Modal.setAppElement("#root");

import CreateMusic from "./pages/CreateMusic.jsx";

import UserPlaylists from "./pages/UserPlaylists.jsx";
<<<<<<< HEAD
import Introduce from "./pages/Introduce.jsx";
=======
import Welcome from "./pages/Welcome.jsx";
>>>>>>> dev

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/join", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/musicBoards", element: <MusicBoards /> },
      { path: "/playlist", element: <Playlists /> },
      { path: "/music/create", element: <CreateMusic /> },
      { path: "/myPlaylist", element: <UserPlaylists /> },
<<<<<<< HEAD
      {path: "/Introduce", element: <Introduce />}
=======
      { path: "/logout", element: <Welcome /> },
>>>>>>> dev
    ],
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   path: "/join",
  //   element: <Signup />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </RecoilRoot>
);
