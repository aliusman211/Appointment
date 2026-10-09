import { useEffect, useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiX,
  FiMenu,
} from "react-icons/fi";

import userIcon from "../assets/Skincare/user-icon.png";
import Group3 from "../assets/Group 3.png";

interface NavbarProps {
  open: () => void;
  onSignIn: () => void;
}

const Navbar = ({ open, onSignIn }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);


  const handleHomeClick = () => {
    setMenuOpen(false);
    open();
  };

  const handleSignInClick = () => {
    setMenuOpen(false);
    onSignIn();
  };

  return (
    <>
      <nav className="fixed left-0 top-0  z-[9999] w-full px-3 py-6 sm:px-4 sm:py-3 md:px-6">
        <div
          className={`mx-auto flex h-[56px] w-full max-w-[1200px] items-center justify-between gap-2 rounded-[16px] border border-white/10 px-3 transition-all duration-500 sm:h-[60px] sm:rounded-[20px] sm:px-4 md:px-6 ${
            isScrolled
              ? "bg-black/80 shadow-2xl backdrop-blur-md"
              : "bg-black"
          }`}
        >

          <div
            onClick={handleHomeClick}
            className="relative flex shrink-0 cursor-pointer flex-col items-center justify-center pt-1.5 sm:pt-2"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <img
                className="h-[10px] w-[10px] object-contain text-white sm:h-[12px] sm:w-[12px] md:h-[14px] md:w-[14px]"
                src={Group3}
                alt="Logo Icon"
              />
            </div>

            <h1 className="font-serif text-[18px] leading-none tracking-[-1px] text-white sm:text-[20px] md:text-[22px] lg:text-[24px]">
              AppointSet
            </h1>
          </div>

          <div className="ml-4 hidden h-[36px] min-w-0 flex-1 items-center gap-2 lg:flex lg:gap-[10px] xl:ml-10">
            {/* Search */}
            <div className="flex h-full min-w-0 flex-1 items-center rounded-[8px] bg-white px-3 lg:max-w-[200px] xl:max-w-[240px]">
              <FiSearch
                size={16}
                className="mr-2 shrink-0 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search by services..."
                className="w-full min-w-0 bg-transparent cursor-pointer text-[12px] font-medium text-gray-800 outline-none placeholder:text-gray-400 lg:text-[13px]"
              />
            </div>
            <div className="flex h-full min-w-0 flex-1 items-center rounded-[8px] bg-white px-3 lg:max-w-[180px]">
              <FiMapPin
                size={14}
                className="mr-2 shrink-0 text-gray-500"
              />

              <input
                type="text"
                placeholder="Los Angeles"
                className="w-full min-w-0 cursor-pointer bg-transparent text-[12px] font-medium text-gray-800 outline-none placeholder:text-gray-400 lg:text-[13px]"
              />

              <button
                type="button"
                className="ml-1 shrink-0 text-gray-400 transition hover:text-black"
                aria-label="Clear location"
              >
                <FiX size={14} />
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-3 text-white lg:flex">
            {/* Sign In */}

<button
  type="button"
  onClick={handleSignInClick}
  className="flex items-center gap-2 cursor-pointer text-[14px] text-white transition-opacity hover:opacity-80"
>
  <img
    src={userIcon}
    alt="User"
    className="h-4 w-4 object-contain brightness-0 invert"
  />

  <span>Sign in</span>
</button>
<button 
              type="button"
              className="rounded-full bg-white cursor-pointer px-4 py-1.5 text-[13px] font-semibold text-black transition hover:bg-gray-200"
            >
              For Business
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/60 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed left-0 right-0 top-[76px] z-[9999] mx-auto w-full max-w-[calc(100vw-24px)] origin-top rounded-[16px] border border-white/10 bg-black p-3 shadow-2xl transition-all duration-300 sm:top-[84px] sm:rounded-[20px] sm:p-4 lg:hidden ${
          menuOpen
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2.5 sm:gap-3">

          <div className="flex h-[46px] items-center rounded-[10px] bg-white px-3 sm:h-[50px] sm:rounded-[12px] sm:px-4">
            <FiSearch
              size={18}
              className="mr-2.5 shrink-0 text-gray-500 sm:mr-3"
            />

            <input
              type="text"
              placeholder="Search by services"
              className="w-full min-w-0 bg-transparent text-[14px] text-gray-800 outline-none placeholder:text-gray-400 sm:text-[15px]"
            />
          </div>

          <div className="flex h-[46px] items-center rounded-[10px] bg-white px-3 sm:h-[50px] sm:rounded-[12px] sm:px-4">
            <FiMapPin
              size={18}
              className="mr-2.5 shrink-0 text-gray-500 sm:mr-3"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full min-w-0 bg-transparent text-[14px] text-gray-800 outline-none placeholder:text-gray-400 sm:text-[15px]"
            />

            <button
              type="button"
              aria-label="Clear location"
              className="shrink-0"
            >
              <FiX
                size={16}
                className="text-gray-400 transition hover:text-black sm:size-[18px]"
              />
            </button>
          </div>
<button
  type="button"
  onClick={handleSignInClick}
  className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/20 text-[14px] font-medium text-white transition hover:bg-white/10"
>
  <img
    src={userIcon}
    alt="User"
    className="h-4 w-4 object-contain"
  />

  <span className="text-white">Sign In</span>
</button>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-[44px] w-full items-center justify-center rounded-full bg-white text-[14px] font-bold text-black transition hover:bg-gray-100 sm:h-[48px] sm:text-[15px]"
          >
            For Business
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
