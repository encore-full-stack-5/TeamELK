import { useState } from "react";
import "./App.css";
import Article from "./atom/Article";
import Button from "./atom/Button";
import Signup from "./pages/SIgnup";

function App() {
  const [page, setPage] = useState("count");

  return (
    <Article>
      <Button onClick={() => setPage("signup")}>가입</Button>
      {page === "signup" && <Signup />}
    </Article>
  );
}

export default App;
