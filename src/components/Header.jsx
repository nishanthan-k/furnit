import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-20 md:h-24 flex justify-between items-center px-2 py-3 md:px-10 relative shadow-sm">
      <div>
        <p className="text-3xl md:text-4xl font-bold text-green-700">Furnit.</p>
      </div>
      <div className="flex md:justify-between items-center md:w-2/3">
        <nav className="hidden md:block">
          <ul className="flex gap-16">
            <li className="hover:cursor-pointer md:text-lg">Home</li>
            <li className="hover:cursor-pointer md:text-lg">Shop</li>
            <li className="hover:cursor-pointer md:text-lg">About</li>
            <li className="hover:cursor-pointer md:text-lg">Contact</li>
          </ul>
        </nav>
        <section className="flex gap-6 ml-5 mr-2">
          <IoSearchSharp size={20} />
          <GoPerson size={22} />
          <FiShoppingCart size={20} />
        </section>
        <section className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu size={23} />
        </section>
      </div>
      {isOpen && (
        <nav className="absolute w-full h-dvh top-0 bg-slate-900 left-0 text-white">
          <MdClose
            size={30}
            className="ml-auto mr-5 mt-7"
            onClick={() => setIsOpen(!isOpen)}
          />
          <ul className="w-full h-full flex flex-col items-center gap-20 mt-24">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
