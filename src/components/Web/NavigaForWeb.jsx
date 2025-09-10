
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/Web/Navigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModal } from "../../store/authSlice";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { Menu } from "lucide-react";

// Hook kiểm tra kích thước màn hình
function useShortMenuLabel() {
  const [short, setShort] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShort(window.innerWidth < 1100 && window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return short;
}

const NavigaForWeb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const userRole = useSelector((state) => state.auth.userRole);
  const isLoggedIn = !!userRole;
  const shortMenu = useShortMenuLabel();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRestrictedAction = (message, callback) => (event) => {
    event.preventDefault();
    toast.info(message, {
      position: "top-center",
      autoClose: 2000,
    });
    callback?.();
  };

  const handleTestClick = (event) => {
    console.log("userRole:", userRole);
    if (["Doctor", "Staff", "Manager"].includes(userRole)) {
      toast.info("Bạn không thể truy cập vào bài kiểm tra!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleComingSoon = handleRestrictedAction(
    "Coming Soon! This feature is under development."
  );
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-lg relative transition-all duration-300">
      <div className="hidden md:flex items-center w-full">
        {/* Menu trái */}
        <div className="flex flex-1 items-center gap-4 min-w-0">
          <div
            className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: "url('/emo.webp')",
              visibility: "hidden",
            }}
          />
          <a
            href="#"
            onClick={handleComingSoon}
            className="hover:text-purple-500 cursor-pointer relative group text-base"
            data-tooltip-id="coming-soon-tooltip"
            data-tooltip-content="Coming Soon!"
          >
            {shortMenu ? "Ga.." : "Game"}
            <span className="absolute -top-2 -right-4 bg-yellow-400 text-xs px-1 rounded-full text-white">
              Soon
            </span>
          </a>
          <Link
            to="learnAboutEmo"
            className={`hover:text-purple-500 text-base ${location.pathname === "/EMO/learnAboutEmo"
              ? "text-purple-500"
              : ""
              }`}
          >
            {shortMenu ? "Lear..." : "Learn about EmoEase"}
          </Link>
          {/* {userRole === "User" && ( */}
          <Link
            to="counselor"
            className={`hover:text-purple-500 ${location.pathname === "/EMO/counselor" ? "text-purple-500" : ""
              }`}
          >
            Therapist
          </Link>
          {/* )} */}
        </div>
        {/* Logo giữa */}
        <div className="flex flex-1 justify-center min-w-0">
          <Link to="/">
            <div
              className={`${styles.knewave} text-[#4a2580] font-light text-5xl tracking-widest`}
            >
              EMOEASE
            </div>
          </Link>
        </div>
        {/* Menu phải */}
        <div className="flex flex-1 items-center justify-end gap-4 min-w-0">
          {/* Ẩn Extras khi shortMenu là true */}
          <a
            href="#"
            onClick={handleComingSoon}
            className="hover:text-purple-500 cursor-pointer relative group text-base"
            data-tooltip-id="coming-soon-tooltip"
            data-tooltip-content="Coming Soon!"
          >
            {shortMenu ? "Ex.." : "Extras"}
            <span className="absolute -top-2 -right-4 bg-yellow-400 text-xs px-1 rounded-full text-white">
              Soon
            </span>
          </a>
          <Link
            to="shop"
            className={`hover:text-purple-500 ${location.pathname === "/EMO/shop" ? "text-purple-500" : ""
              }`}
          >
            Store
          </Link>

        </div>
      </div>
      {/* Navigation cho mobile */}
      <div className="flex w-full items-center justify-between md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/30 backdrop-blur-md shadow px-3 py-2 rounded-xl text-sm font-semibold"
        >
          <Menu className="w-5 h-5 text-[#C8A2C8]" />
        </button>
        <div className="pointer-events-none select-none flex-1 flex justify-center">
          <div
            className={`${styles.knewave} text-[#4a2580] font-light text-2xl tracking-widest`}
          >
            EMOEASE
          </div>
        </div>

      </div>
      {/* Dành cho mở popup mobile */}
      {isOpen && (
        <>
          {/* Overlay làm tối nền */}
          <div
            className="fixed inset-0 bg-black/40 z-[999]"
            onClick={() => setIsOpen(false)}
            aria-label="Đóng menu"
          />
          {/* Menu mobile */}
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-purple-50 to-white shadow-lg rounded-b-2xl z-[1000] pointer-events-auto overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="p-4">
              <Link
                to="learnAboutEmo"
                className="flex items-center justify-between px-4 py-3 bg-white bg-opacity-90 rounded-lg mb-2 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 text-base border-none shadow-sm"
                onClick={handleMenuItemClick}
              >
                <span>Learn about EmoEase</span>
                <span className="text-purple-500">📖</span>
              </Link>
              <Link
                to="shop"
                className="flex items-center justify-between px-4 py-3 bg-white bg-opacity-90 rounded-lg mb-2 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 text-base border-none shadow-sm"
                onClick={handleMenuItemClick}
              >
                <span>Store</span>
                <span className="text-purple-500">🛒</span>
              </Link>
              {isLoggedIn ? (
                <Link
                  to="/AIChatBoxWithEmo"
                  onClick={handleTestClick}
                  className="flex items-center justify-center px-4 py-2"
                >

                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleMenuItemClick();
                    dispatch(openLoginModal());
                  }}
                  className="flex items-center justify-center w-full text-left px-4 py-2"
                >

                </button>
              )}
            </div>
          </div>
        </>
      )}
      <Tooltip id="coming-soon-tooltip" place="top" effect="solid" />
    </nav>
  );
};

export default NavigaForWeb;
