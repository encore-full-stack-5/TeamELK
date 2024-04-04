import { useState } from "react";
import Article from "../atom/Article";
import { register } from "../api/auth";
import Label from "../atom/Label";
import Input from "../atom/Input";
import Button from "../atom/Button";

const Signup = () => {
  //   const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const uid = document.getElementById("uid").value;
    const passwordDoc = document.getElementById("password");
    let password = passwordDoc.value;
    const passwordCheckDoc = document.getElementById("passwordCheck");
    let passwordCheck = passwordCheckDoc.value;
    const nickName = document.getElementById("nickName").value;
    try {
      const res = await register({ uid, password, nickName });
      //   if (res.status === 201 && password === passwordCheck) navigate("/login");
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
  return (
    <div className="container">
      <Article>
        <Label htmlFor="message">{message}</Label>
        <form onSubmit={onSubmit}>
          <Input id="uid" placeholder="ID 입력" required />
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
        </form>
      </Article>
    </div>
  );
};
export default Signup;
