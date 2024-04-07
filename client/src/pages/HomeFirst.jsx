import { useEffect, useState } from "react";
import Button from "../atom/Button";

const HomeFirst = (props) => {
  const [musicList, setMusicList] = useState([]);
  const [randomGenre, setRandomGenre] = useState("");

  useEffect(() => {
    // props.data가 변경될 때마다 musicList 상태를 업데이트
    if (props.data && props.data.length > 0) {
      // 랜덤 장르 설정
      const randomId = Math.floor(Math.random() * props.data.length);
      const genre = props.data[randomId].genre;
      setRandomGenre(genre);

      const filterdMusicList = props.data
        .filter((el) => el.genre === genre)
        .map((el) => ({
          ...el,
          isShow: false,
        }));
      setMusicList(filterdMusicList);
    }
  }, [props.data]); // props.data가 변경될 때마다 이 효과를 다시 실행

  if (musicList.length === 0) {
    return null;
  }

  const onClickShow = (index) => {
    const updatedMusicList = musicList.map((el, i) => {
      return i === index ? { ...el, isShow: !el.isShow } : el;
    });
    setMusicList(updatedMusicList);
  };

  return (
    <>
      <div
        className="board-article mx-auto bg-white rounded px-32 mb-4 overflow-y-auto"
        style={{
          height: "70vh",
          top: "50%",
          left: "50%",
          transform: "translate(0, -10%)",
          margin: "0 auto",
        }}
      >
        <p>추천 {randomGenre} 음악</p>
        {musicList.map((el, i) =>
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
        )}
      </div>
    </>
  );
};

export default HomeFirst;
