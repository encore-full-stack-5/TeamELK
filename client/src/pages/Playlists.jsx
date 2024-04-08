import { useEffect, useState } from "react";
import Card from "../components/Card";
import Modal from "react-modal";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";
import Textarea from "../atom/Textarea";

import { createPlaylist, getPlaylist } from "../api/auth.js";
import { useNavigate } from "react-router-dom";

const Playlists = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const user = localStorage.getItem("userId");
  const nickName = localStorage.getItem("nickName");
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

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
    const fetchPlaylists = async () => {
      try {
        const res = await getPlaylist(user);
        setPlaylists(res.data);
      } catch (error) {
        console.log("Error fetching playlists:", error);
      }
    };
    fetchPlaylists();
  }, [user]);

  const addPlaylist = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const img = document.getElementById("content").value;
    try {
      const res = await createPlaylist({ user, name, img });
      if (res.status === 201) {
        alert("플레이리스트가 추가되었습니다.");
        closeModal();
        const updatedPlaylists = await getPlaylist(user);
        setPlaylists(updatedPlaylists.data);
      }
    } catch (error) {
      alert("플레이리스트 추가 중 오류가 발생했습니다.");
    }
  };

  const handleCardClick = (id) => {
    localStorage.setItem("playlistId", id);
    navigate("/myPlaylist");
  };

  const gotoLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div
        className="container overflow-y-auto"
        style={{
          paddingTop: "7%",
          height: "100vh",
          position: "fixed",
          top: "46%",
          left: "50%",
          transform: "translate(-50%, -45%)",
          margin: "0 auto",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {playlists.length > 0 ? (
              playlists.map((playlist) => (
                <Card
                  key={playlist.id}
                  imageUrl={playlist.img}
                  name={playlist.name}
                  content={nickName}
                  onClick={() => handleCardClick(playlist.id)}
                />
              ))
            ) : localStorage.getItem("uid") !== null ? (
              <p>플레이리스트가 없습니다.</p>
            ) : (
              <Button onClick={gotoLogin}>로그인으로 이동</Button>
            )}
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            right: "3rem",
            bottom: "3rem",
            //top: "85vh",
            //marginLeft: "90vw"
          }}
        ></div>
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
            <Button onClick={addPlaylist}>추가</Button>
          </div>
        </Modal>
      </div>
      <button
        className="addButton"
        style={{
          position: "fixed",
          bottom: "3rem",
          right: "3rem",
        }}
        onClick={openModal}
      >
        +
      </button>
    </>
  );
};
export default Playlists;
