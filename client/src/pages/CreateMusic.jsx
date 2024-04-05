import { useState } from "react";
import Article from "../atom/Article";
import Label from "../atom/Label";
import Input from "../atom/Input";
import Button from "../atom/Button";
import { createMusic } from "../api/music";
import TextArea from "../atom/Textarea";

const CreateMusic = () => {
  //   const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const singer = document.getElementById("singer").value;
    const genre = document.getElementById("genre").value;
    const lyrics = document.getElementById("lyrics").value;
    try {
      const res = await createMusic({ title, singer, genre, lyrics });
      console.log(res);
      //   if (res.status === 201 && password === passwordCheck) navigate("/login");
      if (res.status === 201) {
        setMessage("노래 등록 완료");
      } else {
        setMessage("다시 입력해 주세요.");
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }
  };
  return (
    <div className="container">
      <Article>
        <Label htmlFor="message">{message}</Label>
        <form onSubmit={onSubmit}>
          <Input id="title" placeholder="제목 입력" required />
          <Input id="singer" placeholder="가수 입력" type="singer" required />
          <Input id="genre" placeholder="장르 입력" type="genre" required />
          <Textarea
            id="lyrics"
            placeholder="가사 입력"
            type="lyrics"
            required
          />
          <hr className="m-4" />
          <Button>노래 등록</Button>
        </form>
      </Article>
    </div>
  );
};
export default CreateMusic;
