import Button from "../atom/Button";

const Welcome = () => {
  //   console.log("welcome 들어옴");

  return (
    <>
      <Button>{`${localStorage.getItem("nickName")}님 환영합니다!`}</Button>
    </>
  );
};
export default Welcome;
