import { FaInbox } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import CardsFeature from "./CardsFeature";
import HomeSchedule from "./HomeSchedule";

const HomePage = () => {
  return (
    <div>
      <div className="rounded-lg bg-Gradient-to-r from-blue-600 to bg-purple-600 m-4 p-2">
        <p className="bg-white/20 rounded-full w-fit px-3 py-1 text-xs text-white font-medium">
          Fall Semester 2026
        </p>
        <h1 className="text-white text-2xl md:text-3xl p-2 font-bold">
          Welcome Back, Ahmed!
        </h1>
        <p className="text-gray-100 text-sm md:text-lg p-2 lg:w-200">
          You have
          <span className="font-bold underline text-white m-2">
            2 classes today
          </span>
          and
          <span className="font-bold underline text-white m-2">
            1 pending assignment
          </span>
          1 pending assignment due before midnight. Keep up the great streak!
        </p>
        <div className="flex items-center gap-4 p-2 cursor-pointer">
          <span className="bg-white flex items-center gap-0.5 md:gap-2 p-0.5 md:p-2 rounded-lg text-indigo-600 font-bold">
            <FaInbox />
            <p>View Today Shudele</p>
          </span>
          <span className="bg-indigo-800/40 flex items-center gap-0.5 md:gap-2 p-0.5 md:p-2 rounded-lg text-white font-medium">
            <FaCheckCircle />
            <p>Check Assignments</p>
          </span>
        </div>
      </div>
      <CardsFeature />
      <HomeSchedule />
    </div>
  );
};

export default HomePage;
