import React from "react";

const quotes = [
    {
        text: "Không có gì quý hơn độc lập tự do.",
        source: "Hồ Chí Minh, 1966"
    },
    {
        text: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, ai cũng có cơm ăn áo mặc, ai cũng được học hành.",
        source: "Hồ Chí Minh, 1945"
    },
    {
        text: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác ngoài con đường cách mạng vô sản.",
        source: "Hồ Chí Minh, 1945"
    },
    {
        text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
        source: "Hồ Chí Minh"
    },
    {
        text: "Dân tộc ta là một dân tộc anh hùng, nhân dân ta là một nhân dân dũng cảm, cần cù, sáng tạo.",
        source: "Hồ Chí Minh"
    }
];

export default function QuotesPage() {
    return (
        <div className="prose max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">Trích dẫn nổi bật của Hồ Chí Minh</h1>
            <ul className="space-y-6">
                {quotes.map((q, idx) => (
                    <li key={idx} className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow">
                        <p className="text-lg font-semibold mb-2">“{q.text}”</p>
                        <p className="text-sm text-gray-600 italic">{q.source}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
