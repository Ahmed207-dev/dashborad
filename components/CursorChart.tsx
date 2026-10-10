"use client";
import { IoIosMore } from "react-icons/io";

import { Pie, PieChart, Tooltip, TooltipIndex } from "recharts";

const data02 = [
  { name: "A1", value: 9.2, fill: "#C3EBFA" },
  { name: "A2", value: 0.8, fill: "#FAE27C" },
];

// #endregion
export default function TwoLevelPieChart({
  isAnimationActive,
  defaultIndex,
  Title,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
  Title?: string;
}) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-2 relative">
      <div className=" flex justify-between items-center">
        <h1>{Title}</h1>
        <IoIosMore className="cursor-pointer" />
      </div>
      <PieChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="60%"
          startAngle={180}
          endAngle={0}
          innerRadius="60%"
          outerRadius="80%"
          fill="#82ca9d"
          stroke="white"
          label
          isAnimationActive={isAnimationActive}
        />
        <Tooltip defaultIndex={defaultIndex} />
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-1/2 text-center">
        <h1 className="text-xl font-bold">{data02[0].value}</h1>
        <p className="text-gray-500 text-xs">OF 10 MAX LTS </p>
      </div>
      <h2 className="absolute right-0 left-0  m-auto text-center  bottom-20">
        1st Semster - 2nd Semster
      </h2>
    </div>
  );
}
