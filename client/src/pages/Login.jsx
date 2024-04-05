import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/auth";
import Input from "../atom/Input";
import Label from "../atom/Label";
import Article from "../atom/Article";
import Button from "../atom/Button";

const Login = () => {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const uid = document.getElementById("id").value;
    const password = document.getElementById("pw").value;

    const res = await login({ uid, password });
    console.log(res.data);
    if (res.status === 201) {
      localStorage.setItem("id", res.data.id);
      console.log("로그인 완료");
    } else {
      setMessage("아이디 또는 비밀번호를 잘못 입력했습니다.");
    }
  };
  return (
    <div className="container">
      <Article>
        <form onSubmit={onSubmit}>
          <img src="../../public/welon.png" />
          <Label htmlFor="{id}"></Label>
          <Input id="id" placeholder="ID 입력" required></Input>
          <Label htmlFor="{pw}"></Label>
          <Input id="pw" placeholder="PW 입력" type="password" required></Input>
          <hr className="m-4" />
          <Button>로그인</Button>
          <br />
          <p
            onClick={() => {
              navigate("/join");
            }}
            className="signup-p"
          >
            회원가입
          </p>
        </form>
      </Article>
    </div>
  );
};
export default Login;
