import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";

const Home = () => {
  return (
    <>
      <header className="bg-white flex">
        <div className="flex lg:flex-1">
          <img src="../../welon.png" width={80} />
        </div>

        <div className="flex">
          <p>노래 목록</p>
          <p>내 플레이리스트</p>
        </div>
        <div className="flex">
          <p>login</p>
        </div>
      </header>

      <hr class="home-hr" />

      <div className="container">
        <Article>
          <p>추천 플레이리스트</p>
          <div>
            <Article>
              <img src="../../welon.png" width={300} />
              <img src="../../welon.png" width={300} />
              <img src="../../welon.png" width={300} />
            </Article>
          </div>
        </Article>

        <div></div>
      </div>

      <hr className="home-hr" />
      <br />

      <div className="flex">
        <Input
          className="home-search"
          id="search"
          placeholder="검색어를 입력하세요."
        />
        <button
          type="submit"
          class="inline justify-center p-2 text-green-600 rounded-lg cursor-pointer"
        >
          <svg
            class="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>

        {/* <Button>검색</Button> */}
      </div>
    </>
  );
};

export default Home;
