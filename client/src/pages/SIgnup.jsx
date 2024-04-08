import { useState } from "react";
import Article from "../atom/Article";
import { idDuplicate, register } from "../api/auth";
import Label from "../atom/Label";
import Input from "../atom/Input";
import Button from "../atom/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //   const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isCheck) return;
    const uid = document.getElementById("uid").value;
    const passwordDoc = document.getElementById("password");
    let password = passwordDoc.value;
    const passwordCheckDoc = document.getElementById("passwordCheck");
    let passwordCheck = passwordCheckDoc.value;
    const nickName = document.getElementById("nickName").value;
    try {
      //   if (res.status === 201 && password === passwordCheck) navigate("/login")
      if (password !== passwordCheck) {
        setMessage("비밀번호가 다릅니다");
        passwordDoc.value = "";
        password = "";
        passwordCheckDoc.value = "";
        passwordCheck = "";
      } else {
        const res = await register({ uid, password, nickName });
        if (res.status === 201) {
          setMessage("회원가입 완료");
          alert("회원가입 완료");
          navigate("/login");
        } else {
          setMessage("오류");
        }
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  const idCheck = async (e) => {
    const uid = document.getElementById("uid").value;
    if (uid.length < 4) {
      alert("4글자 이상 입력하세요");
      return;
    }
    try {
      const user = await idDuplicate(uid);
      console.log(user);
      if (user.status === 200) {
        alert("있는 아이디입니다.");
      }
    } catch (error) {
      setIsCheck(true);
    }
  };
  return (
    <div className="container">
      <Article>
        <Label htmlFor="message">{message}</Label>
        <form onSubmit={onSubmit}>
          <Input id="uid" placeholder="4글자 이상 ID 입력" required />
          {/* <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={idCheck}
          >
            중복확인
          </button> */}
          <div class="flex justify-end">
            <button
              class="bg-green-500 text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 font-bold py-1 px-3 rounded-full text-center"
              onClick={idCheck}
            >
              중복 확인
            </button>
          </div>
          {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            중복 확인
          </button> */}

          <div
            style={{
              transition: "auto 1s",
              display: isCheck ? "block" : "none",
            }}
          >
            <Input
              id="password"
              placeholder="비밀번호 입력"
              type="password"
              required
            />

            <Input
              id="passwordCheck"
              placeholder="비밀번호 확인"
              type="password"
              required
            />
            <Input id="nickName" placeholder="닉네임 입력" required />

            <hr className="m-4" />
            <Button>회원가입</Button>
          </div>
        </form>
      </Article>
    </div>
  );
};
export default Signup;
