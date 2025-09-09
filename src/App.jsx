
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IndependencePage from "./pages/IndependencePage.jsx";
import SocialismPage from "./pages/SocialismPage.jsx";
import QuotesPage from "./pages/QuotesPage.jsx";
import ImpactPage from "./pages/ImpactPage.jsx";

const topicImages = {
  independence: "https://cdn.pixabay.com/photo/2017/01/20/00/30/vietnam-1994674_1280.jpg",
  socialism: "https://cdn.pixabay.com/photo/2016/11/29/09/32/ho-chi-minh-1863527_1280.jpg",
  quotes: "https://cdn.pixabay.com/photo/2017/06/20/19/22/flag-2422451_1280.jpg",
  impact: "https://cdn.pixabay.com/photo/2016/11/29/09/32/ho-chi-minh-1863528_1280.jpg"
};

function Home() {
  return (
    <main className="container mx-auto px-4 py-10 animate-fadein">
      <section className="mb-10">
        <h2 className="text-3xl font-extrabold mb-8 text-red-700 tracking-tight animate-slidein">Mục lục chủ đề</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <li className="group bg-white rounded-2xl shadow-xl p-0 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-card">
            <Link to="/independence" className="block h-full">
              <div className="relative h-44 overflow-hidden">
                <img src={topicImages.independence} alt="Độc lập dân tộc" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-700/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-red-600 group-hover:text-red-800 transition">Độc lập dân tộc</h3>
                <p className="text-base">Lịch sử, quan điểm, các bài phát biểu, sự kiện tiêu biểu về độc lập dân tộc.</p>
              </div>
            </Link>
          </li>
          <li className="group bg-white rounded-2xl shadow-xl p-0 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-card delay-100">
            <Link to="/socialism" className="block h-full">
              <div className="relative h-44 overflow-hidden">
                <img src={topicImages.socialism} alt="Chủ nghĩa xã hội" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-700/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-green-700 group-hover:text-green-900 transition">Chủ nghĩa xã hội</h3>
                <p className="text-base">Định nghĩa, quan điểm của Hồ Chí Minh, các bài viết liên quan đến chủ nghĩa xã hội.</p>
              </div>
            </Link>
          </li>
          <li className="group bg-white rounded-2xl shadow-xl p-0 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-card delay-200">
            <Link to="/quotes" className="block h-full">
              <div className="relative h-44 overflow-hidden">
                <img src={topicImages.quotes} alt="Trích dẫn nổi bật" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-blue-900 transition">Trích dẫn nổi bật</h3>
                <p className="text-base">Các câu nói, tư tưởng tiêu biểu của Hồ Chí Minh về độc lập và chủ nghĩa xã hội.</p>
              </div>
            </Link>
          </li>
          <li className="group bg-white rounded-2xl shadow-xl p-0 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-card delay-300">
            <Link to="/impact" className="block h-full">
              <div className="relative h-44 overflow-hidden">
                <img src={topicImages.impact} alt="Ảnh hưởng & Giá trị hiện nay" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-700 group-hover:text-yellow-900 transition">Ảnh hưởng & Giá trị hiện nay</h3>
                <p className="text-base">Ý nghĩa thực tiễn, giá trị với thế hệ trẻ và xã hội hiện đại.</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
      <section className="mt-12 text-center animate-fadein">
        <p className="text-lg text-gray-700">Trang web cung cấp kiến thức chi tiết về tư tưởng Hồ Chí Minh. Hãy chọn chủ đề để khám phá!</p>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-red-100 to-yellow-50 text-gray-900 font-sans">
        <header className="bg-red-600 text-white py-8 shadow-lg animate-header">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="relative mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Ho_Chi_Minh_1946.jpg" alt="Hồ Chí Minh" className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-2xl object-cover animate-avatar" />
              <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center drop-shadow-lg animate-slidein">Tư tưởng Hồ Chí Minh về Độc lập Dân tộc và Chủ nghĩa Xã hội</h1>
            <p className="text-xl md:text-2xl italic animate-fadein">"Không có gì quý hơn độc lập tự do"</p>
            <nav className="mt-6 flex flex-wrap gap-4 justify-center animate-fadein">
              <Link to="/" className="px-5 py-2 rounded-full bg-white text-red-700 font-bold shadow hover:bg-yellow-100 hover:scale-105 transition-all duration-300">Trang chủ</Link>
              <Link to="/independence" className="px-5 py-2 rounded-full bg-white text-red-700 font-bold shadow hover:bg-yellow-100 hover:scale-105 transition-all duration-300">Độc lập dân tộc</Link>
              <Link to="/socialism" className="px-5 py-2 rounded-full bg-white text-green-700 font-bold shadow hover:bg-yellow-100 hover:scale-105 transition-all duration-300">Chủ nghĩa xã hội</Link>
              <Link to="/quotes" className="px-5 py-2 rounded-full bg-white text-blue-700 font-bold shadow hover:bg-yellow-100 hover:scale-105 transition-all duration-300">Trích dẫn</Link>
              <Link to="/impact" className="px-5 py-2 rounded-full bg-white text-yellow-700 font-bold shadow hover:bg-yellow-100 hover:scale-105 transition-all duration-300">Ảnh hưởng & Giá trị</Link>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/independence" element={<IndependencePage />} />
          <Route path="/socialism" element={<SocialismPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/impact" element={<ImpactPage />} />
        </Routes>
        <footer className="bg-gray-100 text-center py-4 text-gray-500 mt-10 border-t animate-fadein">
          &copy; {new Date().getFullYear()} Tư tưởng Hồ Chí Minh
        </footer>
      </div>
    </Router>
  );
}

export default App;