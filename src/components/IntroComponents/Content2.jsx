// MoodOption.jsx
import React from "react";
import { motion } from "framer-motion";

export const ContentList2 = React.forwardRef(({ onConfirm, isLoading }, ref) => {
    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        }),
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-center items-center p-6 sm:p-8 bg-black/40"
        >
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 text-center relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <span className="text-white">Thời kỳ Quá độ lên Chủ nghĩa Xã hội</span>
                <motion.div
                    className="absolute -bottom-3 left-1/2 w-20 h-1 bg-white rounded-full"
                    style={{ transform: "translateX(-50%)" }}
                    initial={{ width: 0 }}
                    animate={{ width: "5rem" }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                />
            </motion.h1>

            {/* 3 ô ở trên */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-6xl mb-6">
                {[
                    {
                        title: "Khái niệm Thời kỳ Quá độ",
                        image: "/30-9-bac.jpeg",
                        description:
                            "Thời kỳ quá độ là giai đoạn chuyển đổi từ xã hội cũ sang chủ nghĩa xã hội, thực hiện các thay đổi về kinh tế, chính trị, văn hóa, tùy thuộc vào điều kiện mỗi quốc gia.",
                    },
                    {
                        title: "Cần thiết Khách quan",
                        image: "/30-9-bac.jpeg",
                        description:
                            "Thời kỳ quá độ cần thiết do mâu thuẫn kinh tế - xã hội trong xã hội cũ, đòi hỏi cải tạo và xây dựng các yếu tố mới để tiến tới chủ nghĩa xã hội.",
                    },
                    {
                        title: "Nội dung của Thời kỳ Quá độ",
                        image: "/30-9-bac.jpeg",
                        description:
                            "Bao gồm xây dựng cơ sở vật chất - kỹ thuật, nhà nước xã hội chủ nghĩa, văn hóa tiên tiến, và công bằng xã hội, dưới sự lãnh đạo của Đảng Cộng sản.",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-purple-800 mb-3 text-center">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 text-sm text-center flex-grow">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 2 ô ở dưới chính giữa */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                {[
                    {
                        title: "Đặc điểm Thời kỳ Quá độ ở Việt Nam",
                        image: "/30-9-bac.jpeg",
                        description:
                            "Việt Nam quá độ từ nền kinh tế nông nghiệp lạc hậu, kết hợp kinh tế thị trường định hướng xã hội chủ nghĩa, hội nhập quốc tế, và sự lãnh đạo của Đảng.",
                    },
                    {
                        title: "Ý nghĩa của Thời kỳ Quá độ",
                        image: "/30-9-bac.jpeg",
                        description:
                            "Thời kỳ quá độ khẳng định quy luật phát triển lịch sử, định hướng chính sách phát triển kinh tế, chính trị, văn hóa, giúp Việt Nam tránh sai lầm và tiến tới mục tiêu xã hội chủ nghĩa.",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index + 3} // Offset cho animation
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-purple-800 mb-3 text-center">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 text-sm text-center flex-grow">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.button
                onClick={onConfirm}
                disabled={isLoading}
                className={`relative z-50 mt-4 px-5 py-2 bg-gradient-to-r from-[#602985] to-[#7b42b0] text-white rounded-lg hover:bg-purple-800 transition-all flex items-center gap-1 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                whileHover={{ scale: isLoading ? 1 : 1.03 }}
                whileTap={{ scale: isLoading ? 1 : 0.97 }}
            >
                {isLoading ? "Đang xử lý..." : "Tiếp theo"}
            </motion.button>
        </motion.div>
    );
});

export default ContentList2;