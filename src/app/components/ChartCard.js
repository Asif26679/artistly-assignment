"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function ChartCard({ title, subtitle, type = "line", data }) {
  return (
    <div className="bg-white border rounded-lg shadow p-4 w-full">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      <p className="text-xs text-gray-400 mb-4">{subtitle}</p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4F46E5"
                strokeWidth={2}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
