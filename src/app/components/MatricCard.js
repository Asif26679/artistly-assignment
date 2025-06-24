"use client";

export default function MetricCard({ title, value, change, icon }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow hover:shadow-md transition">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        <p className="text-sm mt-1 text-green-600">{change}</p>
      </div>
      <div className="text-white bg-purple-600 rounded-full p-2">
        {icon}
      </div>
    </div>
  );
}
