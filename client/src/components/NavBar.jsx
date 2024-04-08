import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//  components/MavBar.jsx
const MavBar = () => {
  const navigate = useNavigate();
  // 컴포넌트 내부의 상태 변경 로직
  useEffect(() => {
    if (localStorage.getItem("uid") !== null) {
      localStorage.setItem("state", "logout");
    }
  }, []);

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
          <Link to="/Home">
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
          {localStorage.getItem("uid") !== null ? (
            <Link to="/logout" className="nav-login">
              logout
            </Link>
          ) : (
            <Link to="/login" className="nav-login">
              login
            </Link>
          )}
        </div>
      </nav>

      <hr className="home-hr" />
    </>
  );
};

export default MavBar;
