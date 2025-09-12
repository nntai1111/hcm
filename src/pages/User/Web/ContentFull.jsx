import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBook, FaLightbulb, FaGlobe } from 'react-icons/fa';
import SocialismPage1 from '../../../components/Content/SocialismPage1';
import SocialismPage2 from '../../../components/Content/SocialismPage2';
import SocialismPage3 from '../../../components/Content/SocialismPage3';

const SocialismApp = () => {
    const sections = [
        {
            id: 'section1',
            title: 'Chủ nghĩa xã hội',
            icon: <FaBook className="text-4xl text-red-600 mb-4" />,
            component: <SocialismPage1 />,
        },
        {
            id: 'section2',
            title: 'Điều kiện ra đời',
            icon: <FaLightbulb className="text-4xl text-red-600 mb-4" />,
            component: <SocialismPage2 />,
        },
        {
            id: 'section3',
            title: 'Đặc trưng bản chất',
            icon: <FaGlobe className="text-4xl text-red-600 mb-4" />,
            component: <SocialismPage3 />,
        },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const Section = ({ section }) => {
        const controls = useAnimation();
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.3 });

        useEffect(() => {
            if (isInView) controls.start('visible');
        }, [controls, isInView]);

        return (
            <motion.div
                ref={ref}
                variants={sectionVariants}
                initial="hidden"
                animate={controls}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
            >
                <div className="flex flex-col items-center text-center">
                    {section.icon}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <div className="w-full">{section.component}</div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 font-sans bg-[url('/untitled-0.png')] bg-fixed bg-cover bg-center bg-opacity-20">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 w-full px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Khám Phá Chủ Nghĩa Xã Hội</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Tìm hiểu về chủ nghĩa xã hội từ khái niệm cơ bản đến đặc trưng cốt lõi.
                </p>
            </motion.div>

            <div className="w-full px-4">
                {sections.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 text-center"
            >
                <p className="text-lg text-gray-700 mb-4">Chia sẻ kiến thức và khám phá thêm!</p>
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, backgroundColor: '#ef4444' }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md transition-colors"
                >
                    Khám Phá Thêm
                </motion.a>
            </motion.div>
        </div>
    );
};

export default SocialismApp;