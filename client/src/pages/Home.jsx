import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import { useEffect, useState } from "react";
import { search } from "../api/auth";
import HomeFirst from "./HomeFirst";
import SearchResult from "../components/SearchResult";
import { MusiclistState } from "../store/constState";
import { getAllBoards } from "../api/boards";

const Home = () => {
  const [playlist, setPlaylist] = useState(true);
  const [result, setResult] = useState(false);
  const [resList, setResList] = useState([]);

  const [musicList, setMusicList] = useRecoilState(MusiclistState);

  const fetchData = async () => {
    try {
      const { data } = await getAllBoards();
      setMusicList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchWord = document.getElementById("searchInput").value;
    const res = await search(searchWord);
    console.log(res);
    setResList(res.data);
    document.getElementById("searchInput").value = "";

    setPlaylist(false);
    // setResult(true);
  };

  const onClickShow = (index) => {
    const updatedList = resList.map((el, i) => {
      return i === index ? { ...el, isShow: !el.isShow } : el;
    });
    setResList(updatedList);
  };

  return (
    <>
      {playlist ? (
        <div
          className=" home-div"
          style={{
            maxWidth: "100%",
            // visibility: playlist ? "visible" : "hidden",

            margin: "0 auto",
          }}
        >
          <HomeFirst data={musicList} />
        </div>
      ) : (
        <div
          className=" home-div"
          style={{
            maxWidth: "100%",
            // visibility: playlist ? "visible" : "hidden",

            margin: "0 auto",
          }}
        >
          <SearchResult data={resList} />
        </div>
      )}

      <div className="home-bottom">
        <hr className="home-hr" />
        <form onSubmit={onSubmit} className="flex flex-1 mb-8">
          <Input
            className="home-search mt-3"
            id="searchInput"
            placeholder="검색어를 입력하세요."
          />
          <button
            type="submit"
            className="my-2 inline justify-center p-2 text-green-600 rounded-lg cursor-pointer"
            style={{
              backgroundColor: "white",
            }}
          >
            <svg
              className="w- h-6 rotate-90"
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
