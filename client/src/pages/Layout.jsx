// pages/Layout.jsx
import { Outlet } from "react-router-dom";
import MavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div>
      <header className="header mb-4 pb-3">
        <MavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
