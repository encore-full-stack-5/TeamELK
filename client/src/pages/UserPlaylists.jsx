import { useEffect, useState } from "react";
import Button from "../atom/Button.jsx";
import { getMusicInPlaylist } from "../api/auth.js";

const UserPlaylists = () => {
  const [data, setData] = useState([]);
  const playlistId = localStorage.getItem("playlistId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMusicInPlaylist(playlistId);
        // music 배열만 사용하고 isShow 속성을 추가하여 데이터 업데이트
        setData(
          Array.isArray(res.data.music)
            ? res.data.music.map((item) => ({ ...item, isShow: false }))
            : []
        );
      } catch (error) {
        console.error("에러: ", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistId]);

  const onClickShow = (index) => {
    const update = data.map((el, i) => {
      return i === index ? { ...el, isShow: !el.isShow } : { ...el };
    });
    setData(update);
  };

  return (
    <>
      <article className="board-article mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {data.length > 0 ? (
          data.map((el, i) =>
            el.isShow ? (
              <div key={el.id}>
                <Button className="flex" onClick={() => onClickShow(i)}>
                  <p className="left-text">가수 : {el.singer}</p>
                  <p className="left-text">제목 : {el.title}</p>
                  <p className="left-text">장르 : {el.genre}</p>
                  <p className="left-text">가사 : {el.lyrics}</p>
                </Button>
              </div>
            ) : (
              <div key={el.id}>
                <Button className="flex" onClick={() => onClickShow(i)}>
                  <p className="left-text">가수 : {el.singer}</p>
                  <p className="left-text">제목 : {el.title}</p>
                </Button>
              </div>
            )
          )
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </article>
    </>
  );
};

export default UserPlaylists;
