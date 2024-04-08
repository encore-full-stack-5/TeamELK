// 로그아웃 버튼 클릭 핸들러
const Logout = () => {
  // 로컬 스토리지에서 저장된 사용자 정보 제거
  localStorage.clear("uid");
  localStorage.clear("nickName");
  localStorage.clear("userId");
};

export default Logout;
