import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between w-full px-2 py-3 items-center relative shadow-sm">
      <div>
        <p className="text-3xl font-bold text-green-700">Furnit.</p>
      </div>
      <div className="flex gap-4">
        <navbar className="hidden">
          <ul className="flex">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </navbar>
        <section className="flex gap-4">
          <IoSearchSharp size={20} />
          <GoPerson size={22} />
          <FiShoppingCart size={20} />
        </section>
        <section className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu size={23} />
        </section>
      </div>
      {isOpen && (
        <navbar className="absolute w-full h-dvh top-0 bg-slate-900 left-0 text-white">
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
        </navbar>
      )}
    </header>
  );
};

export default Header;
