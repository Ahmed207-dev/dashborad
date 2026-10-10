import { FaPersonCircleCheck } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { TbEditOff } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import { MdSmsFailed } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

const CardsFeature = () => {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <div className="bg-indigo-100  p-4 rounded-xl duration-300 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <p className="bg-indigo-200 p-1 rounded-lg text-sm">2026/27</p>
          <div className="bg-white p-2 rounded-full">
            <FaPersonCircleCheck size={20} className="text-indigo-500" />
          </div>
        </div>
        <span className="font-bold text-3xl p-1 mt-4">96%</span>
        <p className="text-gray-500 text-sm py-2">Attendance Rate</p>
        <div className="w-full h-2 bg-indigo-500 rounded-lg "></div>
      </div>

      <div className="bg-amber-100  p-4 rounded-xl duration-300 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <p className="bg-amber-200 p-1 rounded-lg font-semibold text-sm">
            Grade A
          </p>
          <div className="bg-white p-2 rounded-full">
            <FaGraduationCap size={20} className="text-amber-500" />
          </div>
        </div>
        <span className="font-bold text-3xl p-1 mt-4">3.8/4.0</span>
        <p className="text-gray-500 text-sm py-2">Overall Cumulative GPA</p>
        <div className="text-green-500 text-sm font-semibold flex items-center gap-1">
          <BsArrowUpRight />
          +0.2 higher than last term
        </div>
      </div>

      <div className="bg-blue-100  p-4 rounded-xl duration-300 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <p className="bg-blue-200 p-1 rounded-lg font-semibold text-sm">
            3 Due
          </p>
          <div className="bg-white p-2 rounded-full">
            <TbEditOff size={20} className="text-blue-500" />
          </div>
        </div>
        <span className="font-bold text-3xl p-1 mt-4">3 Tasks</span>
        <p className="text-gray-500 text-sm py-2">Pending Assignments</p>
        <div className="text-red-500 text-sm font-semibold flex items-center gap-1">
          <FaClock />1 submission due today
        </div>
      </div>

      <div className="bg-red-100  p-4 rounded-xl duration-300 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <p className="bg-red-200 p-1 rounded-lg font-semibold text-sm">
            2 Exams
          </p>
          <div className="bg-white p-2 rounded-full">
            <MdSmsFailed size={20} className="text-red-500" />
          </div>
        </div>
        <span className="font-bold text-3xl p-1 mt-4">This Week</span>
        <p className="text-gray-500 text-sm py-2">Upcoming Tests</p>
        <div className="text-red-500 text-sm font-semibold flex items-center gap-1">
          <CgDanger />
          Physics Midterm on Thu
        </div>
      </div>
    </div>
  );
};

export default CardsFeature;
