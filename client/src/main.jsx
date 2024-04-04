import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Signup from "./pages/SIgnup.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/join", element: <Signup /> }],
  },
  {
    path: "/home",
    element: <Home />,
  },
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
