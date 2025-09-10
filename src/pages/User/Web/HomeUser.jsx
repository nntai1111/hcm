import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import { openLoginModal } from "../../../store/authSlice";
import NavigaForWeb from "../../../components/Web/NavigaForWeb";
import Footer from "../../../components/Web/Footer";
import Social from "../../../components/Web/Social";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const userRole = useSelector((state) => state.auth.userRole);
  const [isLoggedIn, setIsLoggedIn] = useState(!!userRole);

  // Thêm state để kiểm tra kích thước màn hình
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    setIsLoggedIn(!!userRole);
  }, [userRole]);

  useEffect(() => {
    // Hàm kiểm tra kích thước màn hình
    const handleResize = () => {
      setShowFooter(window.innerWidth >= 640); // Ẩn Footer nếu nhỏ hơn 640px (sm)
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header */}
      {location.pathname !== "/HomeUser/dashboardUser" && (
        <header className="flex items-center justify-between px-4 md:px-10 pt-4 w-full">
          <nav className="flex-1 flex justify-center">
            <NavigaForWeb />
          </nav>
        </header>
      )}

      {/* Nội dung chính */}
      <main className="flex justify-center">
        <Outlet />
      </main>

      {/* Hiển thị Social nếu đúng đường dẫn */}
      <div className="bottom-[12%] fixed z-50">
        {location.pathname === "/EMO/learnAboutEmo" && <Social />}
      </div>



      {/* Footer */}
      {location.pathname === "/EMO/learnAboutEmo" && showFooter && <Footer />}
    </div>
  );
};

export default Home;
