import AnnouncementPage from "./AnnouncementPage";
import ChartHomePage from "./ChartHomePage";
import HomeCalendr from "./HomeCalendr";
import { IoIosMore } from "react-icons/io";

const HomeSchedule = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-3">
      <div className="flex-2">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Today's Schedule</h1>
            <span className="text-indigo-600 bg-indigo-100 rounded-lg text-sm px-2.5 py-1 font-bold">
              3 Sessions
            </span>
          </div>
          <p className="text-gray-400 text-sm my-2">Saturday, Oct 10, 2026</p>

          <div className="flex items-center justify-between flex-col lg:flex-row border border-indigo-200 border-l-[6px] border-l-indigo-600 p-4 rounded-2xl bg-indigo-50/30 gap-4 my-4">
            {/* Left Section: Icon & Class Info */}
            <div className="flex items-center gap-3">
              {/* CS Icon */}
              <div className="bg-indigo-600 w-12 h-12 flex items-center justify-center rounded-2xl text-white font-bold shrink-0">
                CS
              </div>

              {/* Title, Badge & Subtitle */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-gray-800 text-base">
                    Computer Science & AI
                  </h2>
                  {/* Live Now Badge */}
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-600 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Live Now
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Prof. Sarah Jenkins • Room 302 (Lab B)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-right">
                <p className="text-indigo-600 font-bold text-sm whitespace-nowrap">
                  09:00 - 10:30 AM
                </p>
                <p className="text-gray-400 text-xs">90 Minutes</p>
              </div>

              {/* Join Button */}
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl px-5 py-2.5 text-sm transition-colors whitespace-nowrap cursor-pointer">
                Join Class
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between flex-col lg:flex-row border border-gray-200   p-4 rounded-2xl  gap-4  my-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 w-12 h-12 flex items-center justify-center rounded-2xl text-amber-500 font-bold shrink-0">
                MD
              </div>

              {/* Title, Badge & Subtitle */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-gray-800 text-base">
                    Advanced Calculus & Linear Algebra
                  </h2>
                  {/* Live Now Badge */}
                </div>
                <p className="text-gray-400 text-sm">
                  Dr. Robert Vance • Main Lecture Hall
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-right">
                <p className=" font-bold text-sm whitespace-nowrap">
                  11:00 - 12:30 PM
                </p>
                <p className="text-gray-400 text-xs">Next Session</p>
              </div>

              {/* Join Button */}
              <p className="bg-gray-200 font-medium rounded-xl px-5 py-2.5 text-sm text-gray-500">
                Upcoming
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-col lg:flex-row border border-gray-200   p-4 rounded-2xl  gap-4  my-4">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 w-12 h-12 flex items-center justify-center rounded-2xl text-cyan-500 font-bold shrink-0">
                PH
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-gray-800 text-base">
                    Physics & Optics Lab
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  Prof. Michael Chang • Physics Building Rm 104
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-right">
                <p className=" font-bold text-sm whitespace-nowrap">
                  02:00 - 03:30 PM
                </p>
                <p className="text-gray-400 text-xs">Afternoon</p>
              </div>

              {/* Join Button */}
              <p className="bg-gray-200 font-medium rounded-xl px-5 py-2.5 text-sm text-gray-500">
                Upcoming
              </p>
            </div>
          </div>
        </div>
        <ChartHomePage />
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div>
            <h1 className="font-bold text-xl">Assignments Hub</h1>
            <p className="text-gray-400">Track and submit your course work</p>
          </div>

          <div className="border border-gray-300 p-2 my-2 rounded-lg duration-300  hover:border-indigo-300">
            <label
              htmlFor=""
              className="flex justify-between gap-3 flex-col md:flex-row "
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="peer cursor-pointer w-5 h-5"
                />
                <div className="peer-checked:line-through">
                  <h1 className="font-bold text-lg">
                    Physics Optics Lab Report
                  </h1>
                  <p className="text-gray-400">
                    Subject: Physics • Due Today, 11:59 PM
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end items-center gap-4">
                <span className="bg-amber-100 rounded-lg p-1 text-sm text-amber-600 font-bold">
                  8 hours left
                </span>
                <button className="bg-indigo-600 rounded-lg p-1 cursor-pointer text-white font-bold">
                  submit
                </button>
              </div>
            </label>
          </div>

          <div className="border border-gray-300 p-2 my-2 rounded-lg duration-300  hover:border-indigo-300">
            <label
              htmlFor=""
              className="flex justify-between gap-3 flex-col md:flex-row "
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="peer cursor-pointer w-5 h-5"
                />
                <div className="peer-checked:line-through">
                  <h1 className="font-bold text-lg">Calculus Problem Set #4</h1>
                  <p className="text-gray-400">
                    Subject: Mathematics • Due Oct 12, 2026
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end items-center gap-4">
                <span className="bg-gray-100 rounded-lg p-1 text-sm text-gray-400 font-bold">
                  2 days left
                </span>
                <button className="bg-gray-100 rounded-lg p-1  text-gray-400 font-bold">
                  submit
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className=" flex-1">
        <HomeCalendr />
        <AnnouncementPage />
        <div className="bg-white shadow-lg rounded-lg p-4 my-4 ms-2">
          <div className="flex justify-between items-center m-2">
            <h1 className="text-lg font-bold">Upcoming Events</h1>
            <IoIosMore className="text-gray-300 duration-300 hover:text-black cursor-pointer" />
          </div>

          <div className="flex gap-3 duration-300 hover:bg-gray-100 p-2 my-3 rounded-lg">
            <div className="min-w-10 bg-indigo-100 rounded-lg text-indigo-400 font-bold flex justify-center items-center flex-col">
              <span>OCT</span> <span>12</span>
            </div>
            <div className="text-xs">
              <h1 className="font-semibold">
                Guest Lecture: Quantum Computi...
              </h1>
              <p className="text-gray-400">Auditorium A • 02:00 PM</p>
            </div>
          </div>

          <div className="flex gap-3 duration-300 hover:bg-gray-100 p-2 rounded-lg">
            <div className="min-w-10 bg-red-100 rounded-lg text-red-400  flex justify-center items-center flex-col">
              <span>OCT</span> <span>15</span>
            </div>
            <div className="text-sm">
              <h1 className="font-semibold">Physics Midterm Examination</h1>
              <p className="text-gray-400">Exam Hall 2 • 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSchedule;
