import { Link } from "react-router-dom";

//  components/MavBar.jsx
const MavBar = () => {
  return (
    <nav className="flex justify-around">
      <Link to="/">노래 목록</Link>
      <Link to="/login">login</Link>
    </nav>
  );
};

export default MavBar;
