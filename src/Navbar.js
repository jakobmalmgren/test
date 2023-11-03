import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  function handleToggle() {
    setOpen(!open);
    console.log(open);
  }
  return (
    <div>
      <div className="w-full bg-emerald-700 h-10 flex justify-end items-center relative">
        <ul className="flex justify-evenly items-center bg-emerald-700  w-full absolute hidden  sm:flex text-white ">
          <li className="py-2.5">
            <Link to="/home">Home</Link>
          </li>
          <li className="py-2.5">
            <Link to="/about">About</Link>
          </li>
          <li className="py-2.5">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <div className="px-4">
          {open && (
            <div className="w-full bg-white  absolute top-10 left-0 h-screen h-80 block sm:hidden ">
              <ul className="mt-20 text-emerald-700">
                <li className="py-5 border-t-2 border-black">
                  <Link to="/home">Home</Link>
                </li>
                <li className="py-5 border-t-2 border-black">
                  <Link to="/about">About</Link>
                </li>
                <li className="py-5 border-t-2 border-b-2  border-black">
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          )}
          {open ? (
            <div className="flex sm:hidden">
              <AiOutlineCloseCircle
                onClick={handleToggle}
                className="block sm:hidden cursor-pointer"
              ></AiOutlineCloseCircle>
            </div>
          ) : (
            <div className="flex sm:hidden">
              <RxHamburgerMenu
                onClick={handleToggle}
                className="block sm:hidden cursor-pointer"
              ></RxHamburgerMenu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
