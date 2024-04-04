import Card from "../components/Card";

const Playlists = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          imageUrl="../../public/삐삐.jpg"
          name="임시 플레이리스트"
          uid="김부자"
        />
        <Card
          imageUrl="../../public/스크린샷 2023-03-13 214339.png"
          name="아직 연동 안 함"
          uid="저 좀 힘듦 ㅎㅎ; 이미지 기능은 뺄 수동?."
        />
      </div>
    </div>
  );
};
export default Playlists;
