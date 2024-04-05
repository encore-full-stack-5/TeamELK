import { useState } from "react";
import Card from "../components/Card";
import Modal from "react-modal";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";
import Textarea from "../atom/Textarea";
import { createPlaylist } from "../api/auth.js";
const Playlists = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const user = localStorage.getItem("userId");

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

  const addPlaylist = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const img = document.getElementById("content").value;
    try {
      const res = await createPlaylist({ user, name, img });
      if (res.status === 201) {
        alert("됨");
      }
    } catch (error) {
      alert("에러");
    }
  };
  return (
    <>
      <div className="container" style={{ paddingTop: "7%" }}>
        <div className="mx-auto max-w-screen-xl px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            <Card
              imageUrl="삐삐.jpg"
              name="임시 플레이리스트"
              content="김부자"
            />
            <Card
              imageUrl="스크린샷 2023-03-13 214339.png"
              name="아직 연동 안 함"
              content="저 좀 힘듦 ㅎㅎ; 이미지 기능은 뺄 수동?."
            />
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
        >
          <button className="addButton" onClick={openModal}>
            +
          </button>
        </div>
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyle}>
          <form>
            <Label htmlFor="name">플레이리스트 제목</Label>
            <Input id="name" placeholder="플레이리스트 제목" required />
            <br></br>
            <br></br>
            <Label htmlFor="content">플레이리스트 설명</Label>
            <Textarea
              id="content"
              placeholder="플레이리스트 설명"
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
    </>
  );
};
export default Playlists;
