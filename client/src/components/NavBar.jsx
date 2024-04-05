import { Link } from "react-router-dom";

//  components/MavBar.jsx
const MavBar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <Link to="/">
          <img src="../../welon.png" className="welon-logo" />
        </Link>
        <div className="flex justify-evenly flex-grow">
          <Link to="/" className="nav-list">
            노래 목록
          </Link>
          <Link to="/playlist" className="nav-list">
            내 플레이리스트
          </Link>
        </div>
        <Link to="/login" className="nav-login">
          login
        </Link>
      </nav>

      <hr className="home-hr" />
    </>
  );
};

export default MavBar;
