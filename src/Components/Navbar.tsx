import { useEffect, useState } from "react";
import userIcon from "../assets/Skincare/user-icon.png";
import Group3 from "../assets/Group 3.png";

import {
  FiSearch,
  FiMapPin,
  FiX,
  FiMenu,
} from "react-icons/fi";

interface Navbar2Props {
  open: () => void;
}

const Navbar2 = ({ open }: Navbar2Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeClick = () => {
    setMenuOpen(false);
    open();
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-[9999] w-full transition-all duration-500 sm:px-2 ${
        isScrolled ? "py-2" : "py-2"
      }`}
    >
      <div
        className={`mx-auto flex min-h-[60px] w-full max-w-[1200px] items-center rounded-[20px] border border-1 px-[2px] transition-all duration-500 sm:px-7 lg:px-[25px] ${
          isScrolled
            ? "bg-black/60 shadow-2xl backdrop-blur-md"
            : "bg-black"
        }`}
      >
        {/* Logo */}
        <div
          className="relative shrink-0 cursor-pointer"
          onClick={handleHomeClick}
        >
          <div className="absolute -top-[8px] left-1/2 -translate-x-1/2">
            <img
              className="h-[20px] w-[20px]"
              src={Group3}
              alt=""
            />
          </div>

          <h1 className="cursor-pointer -translate-y-[-5px] font-serif text-[23px] leading-none tracking-[-1px] text-white sm:text-[25px] lg:text-[27px]">
            AppointSet
          </h1>
        </div>

        {/* Desktop Search + Location */}
        <div className="ml-6 hidden h-[35px] min-w-0 flex-1 gap-[10px] lg:flex xl:ml-10">
          {/* Search */}
          <div className="flex w-[200px] shrink-0 items-center rounded-[7px] bg-white px-1 xl:w-[250px] xl:px-[22px]">
            <FiSearch
              size={16}
              strokeWidth={1.5}
              className="mr-2 shrink-0 cursor-pointer text-[#777]"
            />

            <input
              type="text"
              placeholder="Search by services or business"
              className="w-full min-w-0 cursor-pointer bg-transparent text-[14px] font-semibold outline-none placeholder:text-[#6E6E6E] xl:text-[13.5px]"
            />
          </div>

          {/* Location */}
          <div className="flex w-[220px] shrink-0 items-center rounded-[7px] bg-white px-4 xl:w-[200px] xl:px-5">
            <FiMapPin
              size={13}
              strokeWidth={1.6}
              className="mr-2 shrink-0 cursor-pointer text-[#777]"
            />

            <input
              type="text"
              placeholder="Losangles"
              className="w-full min-w-0 cursor-pointer bg-transparent text-[14px] font-semibold outline-none placeholder:text-[#6E6E6E] xl:text-[13.5px]"
            />

            <button
              type="button"
              className="ml-2 shrink-0 cursor-pointer text-[#777] transition hover:text-black"
              aria-label="Clear location"
            >
              <FiX size={13} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Desktop Sign In */}
        <button
          type="button"
          className="hidden h-[50px] shrink-0 cursor-pointer items-center justify-center gap-2 text-[14px] text-white lg:flex xl:w-[145px] xl:text-[14px]"
        >
          <img
            src={userIcon}
            alt="User"
            className="h-4 w-4 object-contain"
          />

          <span>Sign in</span>
        </button>

        {/* Desktop Business */}
        <button
          type="button"
          className="ml-2 hidden h-[30px] w-[120px] shrink-0 cursor-pointer rounded-[200px] bg-white text-[16px] font-semibold text-black transition hover:bg-gray-200 lg:block xl:h-[33px] xl:w-[105px] xl:text-[14px]"
        >
          For Business
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX size={30} />
          ) : (
            <FiMenu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-auto mt-2 w-full max-w-[1210px] rounded-[28px] border border-white/20 bg-black px-4 py-5 shadow-2xl sm:px-6 lg:hidden">
          {/* Mobile Search */}
          <div className="mb-3 flex h-[58px] items-center rounded-[16px] bg-white px-4">
            <FiSearch
              size={24}
              className="mr-3 shrink-0 cursor-pointer text-gray-500"
            />

            <input
              type="text"
              placeholder="Search by services or business"
              className="w-full cursor-pointer bg-transparent text-[16px] text-gray-700 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Mobile Location */}
          <div className="mb-4 flex h-[58px] cursor-pointer items-center rounded-[16px] bg-white px-4">
            <FiMapPin
              size={24}
              className="mr-3 shrink-0 text-gray-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full cursor-pointer bg-transparent text-[16px] text-gray-700 outline-none placeholder:text-gray-500"
            />

            <button
              type="button"
              aria-label="Clear location"
            >
              <FiX
                size={23}
                className="cursor-pointer text-gray-500"
              />
            </button>
          </div>

          {/* Mobile Sign In */}
          <button
            type="button"
            className="mb-3 flex h-[55px] w-full items-center justify-center gap-2 rounded-full border border-white/40 text-[17px] text-white"
          >
            <img
              src={userIcon}
              alt="User"
              className="h-[24px] w-[28px] object-contain"
            />

            <span>Sign In</span>
          </button>

          {/* Mobile Business */}
          <button
            type="button"
            className="h-[55px] w-full rounded-full bg-white text-[17px] font-bold text-black"
          >
            For Business
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;