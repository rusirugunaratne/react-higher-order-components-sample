import { Link } from "react-router-dom";

const style = {
  margin: "0 10px",
};

const Navbar = () => (
  <nav>
    <Link style={style} to='/'>
      Home
    </Link>
    <Link style={style} to='/dashboard'>
      Dashboard
    </Link>
    <Link style={style} to='/profile'>
      Profile
    </Link>
    <Link style={style} to='/users'>
      Users
    </Link>
  </nav>
);

export default Navbar;
