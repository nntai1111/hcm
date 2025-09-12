import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialismPage2 = () => {
    const [activeSection, setActiveSection] = useState('material');
    const sections = {
        material: {
            title: "Tiền đề vật chất",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Phát triển lực lượng sản xuất dưới tư bản dẫn đến mâu thuẫn với chiếm hữu tư nhân, đòi hỏi công hữu, theo C. Mác và Ph. Ăngghen.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        social: {
            title: "Tiền đề xã hội",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Giai cấp công nhân trưởng thành, dưới Đảng Cộng sản, thực hiện cách mạng xã hội chủ nghĩa lật đổ tư bản.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        historical: {
            title: "Điều kiện lịch sử",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Cách mạng Tháng Mười Nga (1917) chứng minh xã hội chủ nghĩa có thể ra đời ở nước lạc hậu, theo V.I. Lênin.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        cause: {
            title: "Nguyên nhân sâu xa",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Mâu thuẫn giai cấp công nhân và tư sản dẫn đến cách mạng vô sản, theo học thuyết Mác - Lênin.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        practice: {
            title: "Thực tiễn Việt Nam",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Việt Nam xây dựng xã hội chủ nghĩa từ mâu thuẫn thực dân, phong kiến, dưới Đảng Cộng sản, từ Cách mạng Tháng Tám (1945).
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        }
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg p-6 mb-6"
            >
                <h2 className="text-3xl font-bold text-gray-900">Điều kiện ra đời chủ nghĩa xã hội</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                {Object.keys(sections).map((key) => (
                    <motion.button
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-lg text-gray-900 font-semibold transition-colors ${activeSection === key ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => setActiveSection(key)}
                    >
                        {sections[key].title}
                    </motion.button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                {Object.keys(sections).map((key) => (
                    activeSection === key && (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-100 rounded-lg p-6"
                        >
                            {sections[key].content}
                            <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
                                {sections[key].images.map((src, index) => (
                                    <motion.img
                                        key={index}
                                        src={src}
                                        alt={`Hình ${index + 1} cho ${sections[key].title}`}
                                        className="w-40 h-28 object-cover rounded-lg shadow-md"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
};

export default SocialismPage2;