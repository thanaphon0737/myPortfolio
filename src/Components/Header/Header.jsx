import { NavLink } from "react-router";
function Header() {
  return (
    <>
      <header className=" text-white p-4 flex justify-between items-center">
        <img src="/logo2.png" alt="" className="h-16"/>
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
