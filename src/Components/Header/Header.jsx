import { NavLink } from "react-router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="text-white p-4 flex justify-between items-center ">
        <img src="/logo2.png" alt="" className="h-16" />
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/Mywork">
            My Work
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? null : <GiHamburgerMenu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <NavLink to="/">
                <a className="hover:underline">Home</a>
              </NavLink>
              <NavLink to="/about">
                <a className="hover:underline">About</a>
              </NavLink>
              <NavLink to="/Mywork">
                <a className="hover:underline">My Work</a>
              </NavLink>
              <NavLink to="/contact">
                <a className="hover:underline">Contact</a>
              </NavLink>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
export default Header;
