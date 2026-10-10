"use client";
import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "May", cs: 85, math: 78, physics: 80 },
  { month: "Jun", cs: 88, math: 82, physics: 79 },
  { month: "Jul", cs: 92, math: 85, physics: 84 },
  { month: "Aug", cs: 90, math: 88, physics: 86 },
  { month: "Sep", cs: 95, math: 87, physics: 89 },
  { month: "Oct", cs: 98, math: 91, physics: 88 },
];

const ChartHomePage = () => {
  const [ShowCs, setShowCs] = useState(true);
  const [ShowMath, setShowMath] = useState(true);
  const [ShowPyx, setShowPyx] = useState(true);
  return (
    <div className="p-2 bg-white shadow-lg my-5 rounded-xl">
      <div className="my-2 py-2">
        <h1 className="font-bold text-lg">Academic Performance</h1>
        <p className="text-gray-400 text-sm">
          Monthly test score progression across core subjects
        </p>
        <div className="flex justify-end items-center gap-3">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => setShowCs(!ShowCs)}
          >
            {ShowCs ? (
              <div className="w-5 h-5 bg-indigo-500 rounded-full"></div>
            ) : (
              <div className="w-5 h-5 border rounded-full"></div>
            )}
            CS
          </div>

          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => setShowMath(!ShowMath)}
          >
            {ShowMath ? (
              <div className="w-5 h-5 bg-amber-500 rounded-full"></div>
            ) : (
              <div className="w-5 h-5 border rounded-full"></div>
            )}
            Math
          </div>

          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => setShowPyx(!ShowPyx)}
          >
            {ShowPyx ? (
              <div className="w-5 h-5 bg-cyan-500 rounded-full"></div>
            ) : (
              <div className="w-5 h-5 border rounded-full"></div>
            )}
            Physics
          </div>
        </div>
      </div>

      <div className="w-full h-80 bg-slate-50/40 rounded-2xl p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            {/* خطوط الخلفية الأفقية فقط */}
            <CartesianGrid
              vertical={false}
              stroke="#E5E7EB"
              strokeDasharray="3 3"
            />

            {/* المحور السيني (الأشهر) */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              dy={10}
            />

            {/* المحور الصادي (الدرجات من 60 لـ 100) */}
            <YAxis
              ticks={[60, 65, 70, 75, 80, 85, 90, 95, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            />

            {/* 1. خط Computer Science (أزرق غامق - متصل وبنقاط مصمتة) */}
            {ShowCs && (
              <Line
                type="monotone"
                dataKey="cs"
                stroke="#4338CA"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#4338CA", strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
            )}

            {/* 2. خط Mathematics (برتقالي/أصفر - منقط وبنقاط مفرغة) */}
            {ShowMath && (
              <Line
                type="monotone"
                dataKey="math"
                stroke="#F59E0B"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={{
                  r: 4,
                  fill: "#FFFFFF",
                  stroke: "#F59E0B",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6 }}
              />
            )}

            {ShowPyx && (
              <Line
                type="monotone"
                dataKey="physics"
                stroke="#06B6D4"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "#FFFFFF",
                  stroke: "#06B6D4",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartHomePage;
