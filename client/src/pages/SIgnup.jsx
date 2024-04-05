import { useState } from "react";
import Article from "../atom/Article";
import { register } from "../api/auth";
import Label from "../atom/Label";
import Input from "../atom/Input";
import Button from "../atom/Button";

const Signup = () => {
  //   const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isCheck, setIsCheck] = useState(false);

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
      const res = await register({ uid, password, nickName });
      //   if (res.status === 201 && password === passwordCheck) navigate("/login")

      if (res.status === 201 && password === passwordCheck) {
        setMessage("회원가입 완료");
      } else if (password !== passwordCheck) {
        setMessage("비밀번호가 다릅니다");
        passwordDoc.value = "";
        password = "";
        passwordCheckDoc.value = "";
        passwordCheck = "";
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  const idCheck = () => {
    const uid = document.getElementById("uid").value;
    setIsCheck(true);
    //   const user = await register({ uid, password, nickName });
  };
  return (
    <div className="container">
      <Article>
        <Label htmlFor="message">{message}</Label>
        <form onSubmit={onSubmit}>
          <Input id="uid" placeholder="ID 입력" required />
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={idCheck}
          >
            중복확인
          </button>

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
