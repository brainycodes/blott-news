// src/components/Header.jsx
import logo from "../assets/blott.svg"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-center bg-[#0e0d13] fixed top-0 left-0 right-0 z-10">
        <img
            className="w-[150px] h-10"
            alt="Blott"
            src={logo}
        />
    </header>
  );
};

export default Header;