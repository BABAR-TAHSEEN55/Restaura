import { useState } from "react";
import logo from "../../restaura-assets/assets/logo.png";
import { LINKS } from "../../restaura-assets/constants/index.jsx";
import { FaTimes } from "react-icons/fa";
interface HandleScrollProps {
  e: Event;
  targetId: string;
}
const Nav = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };
  const HandleScroll = ({ e, targetId }: HandleScrollProps) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offSet = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offSet,
        behavior: "smooth",
      });
    }
    setisMobileMenuOpen(false);
  };
  return (
    <nav className="fixed top-4 flex w-full flex-col items-center justify-center ">
      <div className="w-full flex items-center justify-between overflow-hidden-y p-5 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="logo" width={80} height={80} />
        <div className="hidden space-x-5 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${index !== 0 ? "border-l-3 border-neutral-300/40 text-white pl-2" : " "} hover-opacity-50 `}
              onClick={(e) => HandleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenuOpen}>
            {isMobileMenuOpen ? <FaTimes /> : <FaTimes />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 uppercase tracking-tighter"
              onClick={(e) => HandleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
