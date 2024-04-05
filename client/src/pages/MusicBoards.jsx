import { useEffect, useState } from "react";
import { getAllBoards } from "../api/boards";
import Article from "../atom/Article";
import Button from "../atom/Button";

const MusicBoards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await getAllBoards();
        const moreInfo = data.map((el) => ({
          ...el,
          isShow: false,
        }));
        setData(moreInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onClickShow = (index) => {
    const update = data.map((el, i) => {
      return i === index ? { ...el, isShow: !el.isShow } : { ...el };
    });
    setData(update);
  };
  const moreInfoMusic = () => {
    console.log("more 들어옴");
    data.map((el) => (
      <Article key={el.id}>
        <p>가수 : {el.singer}</p>
        <p>제목 : {el.title}</p>
        <p>{el.genre}</p>
        <p>{el.lyrics}</p>
      </Article>
    ));
  };

  return (
    <article className="board-article mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {isLoading ? (
        <p>loading...</p>
      ) : (
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
      )}
    </article>
  );
};

export default MusicBoards;
