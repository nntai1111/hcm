import React from "react";
import { motion } from "framer-motion";
import { useData } from "./DataContext";
import { AvailableTimePerDay, SleepHoursLevel, ExerciseFrequency } from "../../constants/introData";

const Overview = ({ onNext, overviewRef }) => {
    const { emotions, improvementGoals, entertainmentActivities, foodActivities } = useData();

    return (
        <motion.div
            ref={overviewRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-3xl p-6 bg-white/90 rounded-lg shadow-md z-20"
        >
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Tổng quan về các chức năng</h1>

            {/* Chức năng 1: Cảm xúc */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Cảm xúc của bạn</h2>
                <p className="text-gray-600 mb-2">Các trạng thái cảm xúc bạn có thể chọn:</p>
                <ul className="list-disc pl-6">
                    {emotions.map((emotion) => (
                        <li key={emotion.Id} className="text-gray-600">
                            {emotion.Name}: {emotion.Description}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Chức năng 2: Thời gian rảnh mỗi ngày */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Thời gian rảnh mỗi ngày</h2>
                <p className="text-gray-600 mb-2">Các lựa chọn về thời gian rảnh mỗi ngày:</p>
                <ul className="list-disc pl-6">
                    {AvailableTimePerDay.map((option) => (
                        <li key={option.value} className="text-gray-600">
                            {option.label}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Chức năng 3: Số giờ ngủ */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Số giờ ngủ mỗi ngày</h2>
                <p className="text-gray-600 mb-2">Các lựa chọn về số giờ ngủ mỗi ngày:</p>
                <ul className="list-disc pl-6">
                    {SleepHoursLevel.map((option) => (
                        <li key={option.value} className="text-gray-600">
                            {option.label}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Chức năng 4: Tần suất tập thể dục */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Tần suất tập thể dục</h2>
                <p className="text-gray-600 mb-2">Các lựa chọn về tần suất tập thể dục:</p>
                <ul className="list-disc pl-6">
                    {ExerciseFrequency.map((option) => (
                        <li key={option.value} className="text-gray-600">
                            {option.label}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Chức năng 5: Mục tiêu cải thiện */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Mục tiêu cải thiện</h2>
                <p className="text-gray-600 mb-2">Các mục tiêu cải thiện bạn có thể chọn:</p>
                <ul className="list-disc pl-6">
                    {improvementGoals.map((goal) => (
                        <li key={goal.value} className="text-gray-600">
                            {goal.label}: {goal.description}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Chức năng 6: Hoạt động giải trí */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Hoạt động giải trí</h2>
                <p className="text-gray-600 mb-2">Các hoạt động giải trí bạn có thể chọn:</p>
                <ul className="list-disc pl-6">
                    {entertainmentActivities.map((activity) => (
                        <li key={activity.value} className="text-gray-600">
                            {activity.label}: {activity.description}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Chức năng 7: Món ăn yêu thích */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Món ăn yêu thích</h2>
                <p className="text-gray-600 mb-2">Các món ăn bạn có thể chọn:</p>
                <ul className="list-disc pl-6">
                    {foodActivities.map((food) => (
                        <li key={food.value} className="text-gray-600">
                            {food.label}: {food.description}
                        </li>
                    ))}
                </ul>
            </section>

            <button
                onClick={onNext}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
            >
                Bắt đầu
            </button>
        </motion.div>
    );
};

export default Overview;