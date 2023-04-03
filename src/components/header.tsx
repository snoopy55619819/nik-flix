import { Link } from "react-router-dom";

export function Header() {
  return (
    <ul className="flex p-5">
      <li className="mr-6 text-lg">
        <Link className="text-blue-500 hover:text-blue-800" to="/">
          Home
        </Link>
      </li>
      <li className="mr-6 text-lg">
        <Link className="text-blue-500 hover:text-blue-800" to="/video">
          Video
        </Link>
      </li>
      <li className="mr-6 text-lg">
        <Link className="text-blue-500 hover:text-blue-800" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
}
