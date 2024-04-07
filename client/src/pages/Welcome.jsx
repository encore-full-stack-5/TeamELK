import Button from "../atom/Button";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  //   console.log("welcome 들어옴");
  const moveToPlaylist = () => {
    navigate("/playlist");
  };

  const localStorageClear = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      localStorage.clear();
      alert("로그아웃");
      navigate("/login");
      window.location.reload(); // 새로고침한다
    }
  };

  return (
    <>
      <button
        onClick={moveToPlaylist}
        class="transition ease-in-out delay-150 bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 font-bold py-3 px-8 rounded-full text-center hover:-translate-y-1 hover:scale-110  duration-300 "
      >
        {localStorage.getItem("nickName") !== null
          ? `${localStorage.getItem("nickName")}님 환영합니다!`
          : "환영합니다!"}
      </button>

      <br />
      <br />
      <button
        onClick={localStorageClear}
        class="transition ease-in-out delay-150 bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 font-bold py-3 px-8 rounded-full text-center hover:-translate-y-1 hover:scale-110  duration-300 "
      >
        로그아웃
      </button>
    </>
  );
};
export default Welcome;
