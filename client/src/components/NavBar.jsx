import { Link } from "react-router-dom";

//  components/MavBar.jsx
const MavBar = () => {
  return (
    <>
      <nav
        className="flex justify-between"
        style={{
          width: "90vw",
          margin: "0 auto",
        }}
      >
        <div className="flex-grow">
          <Link to="/">
            <img src="../../welon.png" className="welon-logo" />
          </Link>
        </div>
        <div className="flex justify-evenly flex-grow">
          <Link to="/musicBoards" className="nav-list">
            노래 목록
          </Link>
          <Link to="/playlist" className="nav-list">
            내 플레이리스트
          </Link>
        </div>
        <div className="flex-grow" style={{ textAlign: "right" }}>
          <Link to="/login" className="nav-login">
            login
          </Link>
        </div>
      </nav>

      <hr className="home-hr" />
    </>
  );
};

export default MavBar;
