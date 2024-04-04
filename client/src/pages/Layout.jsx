// pages/Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const Layout = () => {
  return (
    <div className="min-h-screen ">
      <header className="my-4 pb-3">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
