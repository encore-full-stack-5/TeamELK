import { useEffect, useState } from "react";
import Button from "../atom/Button";

const SerachResult = (props) => {
  const [resList, setResList] = useState(props.data);
  // const resList = props.data;
  useEffect(() => {
    if (props.data !== resList) setResList([...props.data]);
  }, [props]);
  const onClickShow = (index) => {
    const updatedMusicList = resList.map((el, i) => {
      return i === index ? { ...el, isShow: !el.isShow } : el;
    });
    setResList(updatedMusicList);
  };

  return (
    <>
      <div
        className="board-article mx-auto bg-white rounded px-32 mb-4 overflow-y-auto"
        style={{
          height: "70vh",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "0 auto",
          position: "absolute",
        }}
      >
        <p>검색 결과</p>
        {resList.map((el, i) =>
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

export default SerachResult;
