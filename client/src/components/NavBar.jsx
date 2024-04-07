import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//  components/MavBar.jsx
const MavBar = () => {
  const [msg, setMsg] = useState("login");

  // 컴포넌트 내부의 상태 변경 로직
  useEffect(() => {
    if (localStorage.getItem("uid") !== null) {
      setMsg("logout");
    }
  }, []);
  const localStorageClear = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      localStorage.clear();
      alert("로그아웃");
      setMsg("login");
      console.log(localStorage.getItem("uid"));
    }
    localStorage.clear();
  };
  return (
    <>
      <nav className="flex justify-between">
        <Link to="/">
          <img src="../../welon.png" className="welon-logo" />
        </Link>
        <div className="flex justify-evenly flex-grow">
          <Link to="/musicBoards" className="nav-list">
            노래 목록
          </Link>
          <Link to="/playlist" className="nav-list">
            내 플레이리스트
          </Link>
        </div>
        {msg === "logout" ? (
          <Link to="/login" className="nav-login" onClick={localStorageClear}>
            logout
          </Link>
        ) : (
          <Link to="/login" className="nav-login">
            login
          </Link>
        )}
      </nav>

      <hr className="home-hr" />
    </>
  );
};

export default MavBar;
