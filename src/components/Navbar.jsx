import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-success mb-4">
      <div className="mx-auto">
        <Link to="/" className="text-white text-decoration-none">Home </Link>
        <Link to="/favoritos" className="text-white text-decoration-none">| Favoritos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
