import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialismPage3 = () => {
    const [activeSection, setActiveSection] = useState('liberation');
    const sections = {
        liberation: {
            title: "Giải phóng giai cấp, dân tộc",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Xóa bóc lột, giải phóng lao động, thúc đẩy phát triển tự do. <br />
                    <strong>Thực tiễn Việt Nam:</strong> Xây dựng xã hội "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        ownership: {
            title: "Nhân dân làm chủ",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Nhân dân nắm quyền qua nhà nước của dân, do dân, vì dân. <br />
                    <strong>Thực tiễn Việt Nam:</strong> Nhà nước pháp quyền xã hội chủ nghĩa với Quốc hội, Mặt trận Tổ quốc.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        economy: {
            title: "Kinh tế phát triển",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Dựa trên công hữu, công nghiệp hóa, phân phối theo lao động. <br />
                    <strong>Thực tiễn Việt Nam:</strong> Kinh tế thị trường định hướng xã hội chủ nghĩa, nhà nước chủ đạo.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        culture: {
            title: "Văn hóa, giáo dục",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Xây dựng văn hóa tiên tiến, nâng dân trí, đảm bảo công bằng. <br />
                    <strong>Thực tiễn Việt Nam:</strong> Phổ cập giáo dục, xóa đói giảm nghèo, bảo hiểm y tế.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        unity: {
            title: "Đoàn kết dân tộc, quốc tế",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Đề cao đoàn kết, hợp tác quốc tế vì hòa bình, phát triển. <br />
                    <strong>Thực tiễn Việt Nam:</strong> Đại đoàn kết dân tộc, tham gia Liên Hợp Quốc, ASEAN.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        leadership: {
            title: "Lãnh đạo của Đảng",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Đảng Cộng sản lãnh đạo, đại diện lợi ích nhân dân. <br />
                    <strong>Thực tiễn Việt Nam:</strong> Đảng lãnh đạo công cuộc đổi mới.
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
                <h2 className="text-3xl font-bold text-gray-900">Đặc trưng bản chất của chủ nghĩa xã hội</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
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

export default SocialismPage3;