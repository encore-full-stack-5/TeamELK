import { useEffect, useState } from "react";
import Button from "../atom/Button.jsx";
import { getMusicInPlaylist } from "../api/auth.js";
import Modal from "react-modal";
import Label from "../atom/Label.jsx";
import Input from "../atom/Input.jsx";
import Textarea from "../atom/Textarea";

const UserPlaylists = () => {
  const [data, setData] = useState([]);
  const playlistId = localStorage.getItem("playlistId");
  const [isOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  };
  const closeModal = () => {
    SetIsOpen(false);
  };

  const customStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // 모달 배경색 및 투명도 설정
    },
    content: {
      top: "50%", // 모달을 화면 상단에서 세로 가운데로 위치시킴
      left: "50%", // 모달을 화면 좌측에서 가로 가운데로 위치시킴
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)", // 모달을 가운데로 이동
      width: "80%", // 모달의 너비 설정
      maxWidth: "500px", // 모달의 최대 너비 설정
      backgroundColor: "#fff", // 모달 배경색 설정
      borderRadius: "8px", // 모달 테두리 설정
      padding: "20px", // 모달 내부 패딩 설정
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // 모달에 그림자 효과 추가
    },
  };
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
        <div
          style={{
            position: "fixed",
            right: "3rem",
            bottom: "3rem",
            //top: "85vh",
            //marginLeft: "90vw"
          }}
        >
          <button className="addButton" onClick={openModal}>
            +
          </button>
        </div>
      </article>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyle}>
        <form>
          <Label htmlFor="name">플레이리스트 제목</Label>
          <Input id="name" placeholder="플레이리스트 제목" required />
          <br></br>
          <br></br>
          <Label htmlFor="content">플레이리스트 설명</Label>
          <Textarea
            id="content"
            placeholder="플레이리스트 설명... 혹은 이미지 추가를 이곳에서 하고 싶었는데 아직 미구현입니다 그냥 아무말을 적어주세요 안 적으면 안 넘어가요"
            rows="5"
            required
          />
        </form>
        <div className="relative flex">
          <Button onClick={closeModal}>닫기</Button>
        </div>
      </Modal>
    </>
  );
};

export default UserPlaylists;
