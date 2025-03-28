import { NavLink } from "react-router";
function Header() {
  return (
    <>
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Thanaphon Thanusan</h1>
        <nav>
          <ul className="flex space-x-4">
            <NavLink to="/">
              <li>
                <a className="hover:underline">Home</a>
              </li>
            </NavLink>
            <NavLink to="/about">
              <li>
                <a className="hover:underline">About</a>
              </li>
            </NavLink>
            <NavLink to="/Mywork">
              <a className="hover:underline">My Work</a>
            </NavLink>
            <NavLink to="/contact">
              <li>
                <a className="hover:underline">Contact</a>
              </li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
