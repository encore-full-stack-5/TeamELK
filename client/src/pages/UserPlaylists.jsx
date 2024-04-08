import { useEffect, useState } from "react";
import Button from "../atom/Button.jsx";
import {
  addMusicInPlaylist,
  getMusicInPlaylist,
  delMusicInPlaylist,
} from "../api/auth.js";
import Modal from "react-modal";
import { getAllBoards } from "../api/boards.js";

const UserPlaylists = () => {
  const [data, setData] = useState([]);
  const playlistId = localStorage.getItem("playlistId");
  const [isOpen, SetIsOpen] = useState(false);
  const [playlists, setPlaylists] = useState([]); // 플레이리스트 목록을 저장할 상태 추가
  const [selectedMusic, setSelectedMusic] = useState(null);

  const openModal = () => {
    SetIsOpen(true);
    fetchPlaylists(); // 모달이 열릴 때 플레이리스트 목록을 가져오는 함수 호출
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
      width: "80%", // 모달의 너비를 조정
      maxWidth: "500px", // 모달의 최대 너비 설정
      maxHeight: "70vh", // 모달의 최대 높이를 80vh로 설정
      backgroundColor: "#fff", // 모달 배경색 설정
      borderRadius: "8px", // 모달 테두리 설정
      padding: "20px", // 모달 내부 패딩 설정
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // 모달에 그림자 효과 추가
      overflowY: "auto", // 모달의 내용이 넘칠 때 스크롤 생성
    },
  };

  const fetchPlaylists = async () => {
    try {
      const res = await getAllBoards(); // 사용자의 플레이리스트 목록을 가져오는 API 호출
      setPlaylists(res.data); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error("플레이리스트 목록을 불러오는 중 에러 발생: ", error);
    }
  };

  const handleAddToPlaylist = async (music) => {
    const musicId = music.id;
    console.log(musicId);
    try {
      await addMusicInPlaylist({ playlistId, musicId });
      confirm("추가 완료!");
      window.location.reload();
    } catch (error) {
      alert("이미 추가된 곡입니다!");
      console.log("플레이리스트에 곡을 추가하는 중 에러 발생: ", error);
    }
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

  const onClickDelete = async (music) => {
    const musicId = music.id;
    console.log(music);
    try {
      const confirmDelete = confirm(`${music.title}을/를 삭제할까요?`);
      if (confirmDelete) {
        await delMusicInPlaylist(playlistId, musicId);
        alert(`${music.title}을/를 삭제했습니다.`);
        window.location.reload();
      } else {
        alert("삭제가 취소되었습니다.");
      }
    } catch (error) {
      alert("오류 발생");
      console.log("플레이리스트에 곡을 삭제하는 중 에러 발생: ", error);
    }
  };

  return (
    <>
      <article className="board-article mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {data.length > 0 ? (
          data.map((el, i) =>
            el.isShow ? (
              <div
                key={el.id}
                style={{
                  transition: "all 3s",
                  transform: "rotateY(720deg)",
                }}
              >
                <Button className="flex" onClick={() => onClickShow(i)}>
                  <p className="left-text">가수 : {el.singer}</p>
                  <p className="left-text">제목 : {el.title}</p>
                  <p className="left-text">장르 : {el.genre}</p>
                  <p className="left-text">가사 : {el.lyrics}</p>
                </Button>
              </div>
            ) : (
              <div key={el.id} className="flex justify-between items-center">
                <div style={{ width: "950px" }}>
                  <Button className="button" onClick={() => onClickShow(i)}>
                    <p className="left-text">가수: {el.singer}</p>
                    <p className="left-text">제목: {el.title}</p>
                  </Button>
                </div>
                <div>
                  <button
                    onClick={() => onClickDelete(el)}
                    className="mt-6 block w-full select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-m font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    style={{ border: "1px solid red" }}
                  >
                    삭제
                  </button>
                </div>
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
        <h2>추가할 곡을 클릭해주세요</h2>
        {playlists.map((music) => (
          <div key={music.id} style={{ maxHeight: "80vh", overflowY: "auto" }}>
            {/* <p>{playlist.singer}</p>
            <p>{playlist.title}</p> */}
            <Button className="flex" onClick={() => setSelectedMusic(music)}>
              <p className="left-text">가수 : {music.singer}</p>
              <p className="left-text">제목 : {music.title}</p>
            </Button>
          </div>
        ))}
        <br></br>
        {selectedMusic && (
          <button onClick={() => handleAddToPlaylist(selectedMusic)}>
            {`"${selectedMusic.title}" 플레이리스트에 추가`}
          </button>
        )}
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  );
};

export default UserPlaylists;
