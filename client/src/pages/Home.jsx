import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import { useState } from "react";

const Home = () => {
  const [playlist, setPlaylist] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    const search = document.getElementById("search").value;
    console.log(search);
    document.getElementById("search").value = "";

    setPlaylist(false);
  };

  return (
    <>
      <div
        className="container"
        style={{ visibility: playlist ? "visible" : "hidden" }}
      >
        <p>추천 플레이리스트</p>
        <article className="mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-evenly">
          <div className="inline-table">
            <Article>
              <Link to="/">
                <img src="../../welon.png" width={300} />
              </Link>
            </Article>
            <Article>
              <Link to="/">
                <img src="../../welon.png" width={300} />
              </Link>
            </Article>
          </div>
          <div className="inline-table">
            <Article>
              <Link to="/">
                <img src="../../welon.png" width={300} />
              </Link>
            </Article>
            <Article>
              <Link to="/">
                <img src="../../welon.png" width={300} />
              </Link>
            </Article>
          </div>
        </article>

        <div></div>
      </div>

      <hr className="home-hr" />

      <div className="flex">
        <form onSubmit={onSubmit} className="flex flex-1">
          <Input
            className="home-search mt-3"
            id="search"
            placeholder="검색어를 입력하세요."
          />
          <button
            type="submit"
            className="mt-3 inline justify-center p-2 text-green-600 rounded-lg cursor-pointer"
          >
            <svg
              className="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
