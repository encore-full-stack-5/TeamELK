import { useEffect, useState } from "react";
import { getAllBoards } from "../api/boards";
import Button from "../atom/Button";
import { useRecoilState } from "recoil";
import { MusiclistState } from "../store/constState";
import { useNavigate } from "react-router-dom";

const MusicBoards = () => {
  // const [data, setData] = useState([]);
  const [data, setData] = useRecoilState(MusiclistState);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllBoards();
      const moreInfo = data.map((el) => ({
        ...el,
        isShow: false,
      }));
      setData(moreInfo);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickShow = (index) => {
    const update = data.map((el, i) => {
      return i === index ? { ...el, isShow: !el.isShow } : { ...el };
    });
    setData(update);
  };

  // const sortByDateDescending = (data) => {
  //   return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  // };

  // // 데이터를 최신 날짜 순으로 정렬
  // const sortedData = sortByDateDescending(data);

  const onClickAdd = () => {
    navigate("/music/create");
  };
  return (
    <div>
      <div
        className="board-article mx-auto bg-white rounded px-32 mb-4 overflow-y-auto"
        style={{
          height: "87vh",
          position: "fixed",
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          margin: "0 auto",
        }}
      >
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
      </div>

      {localStorage.getItem("uid") !== null && (
        <button
          className="addButton"
          style={{
            position: "fixed",
            bottom: "3rem",
            right: "3rem",
          }}
          onClick={onClickAdd}
        >
          +
        </button>
      )}
    </div>
  );
};

export default MusicBoards;
