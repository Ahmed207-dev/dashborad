import { FaPhone } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { AiFillHtml5 } from "react-icons/ai";
import { FaTable } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";

import { teachersData } from "@/lib/data";
import Image from "next/image";
import BigCalnder from "@/components/BigCalnder";
import Link from "next/link";
import AnnouncementPage from "@/components/AnnouncementPage";
import TwoLevelPieChart from "@/components/CursorChart";

interface Teachertype {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

const SinglePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res: Teachertype[] = await teachersData;
  const NumberId = Number(id);
  const data: Teachertype = await res[NumberId - 1];

  return (
    <div className="flex mx-2 flex-col md:flex-row gap-3">
      <div className="flex-2">
        <div className="flex justify-between mb-4 gap-4 flex-col lg:flex-row">
          <div className="flex justify-center items-center bg-indigo-100 gap-4 p-2 rounded-lg flex-col lg:flex-row">
            <Image
              src={data.photo}
              alt={data.name}
              width={150}
              height={150}
              className="rounded-full"
            />

            <div className="">
              <h1 className="font-semibold my-2 text-lg">{data.name}</h1>
              <p className="text-gray-500">{data.subjects}</p>
              <div className="flex justify-between text-sm p-2 gap-2 flex-col lg:flex-row">
                <span>
                  <p className="flex items-center gap-1">
                    <AiFillHtml5 /> {data.classes[0]}
                  </p>
                  <p className="flex  items-center gap-1">
                    <MdOutlineMailLock /> {data.email}
                  </p>
                </span>
                <span>
                  <p className="flex items-center gap-1">
                    <FaPhone /> {data.phone}
                  </p>
                  <p className="flex  items-center gap-1">
                    <FaRegAddressCard /> {data.address.slice(0, 13)}
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-lg p-4 rounded-md">
              <FaTable />
              <span className="font-bold text-lg">90%</span>
              <p className="text-gray-500">attendance</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-md">
              <FaSheetPlastic />
              <span className="font-bold text-lg">2</span>
              <p className="text-gray-500">Branches</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-md">
              <MdOutlinePlayLesson />
              <span className="font-bold text-lg">6</span>
              <p className="text-gray-500">lessons</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-md">
              <FaTable />
              <span className="font-bold text-lg">8</span>
              <p className="text-gray-500">classes</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl w-full p-2">
          <h1 className="font-semibold text-xl">Teacher Shudule</h1>
          <BigCalnder />
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white shadow-xl rounded-xl p-2 my-3">
          <h1 className="font-bold my-3">shortcuts</h1>
          <div className="grid grid-cols-3 gap-2 text-sm ">
            <Link className="bg-indigo-100 rounded-lg p-1" href={``}>
              Teacher Classes
            </Link>
            <Link className="bg-amber-100 rounded-lg p-1" href={``}>
              Teacher Student
            </Link>
            <Link className="bg-cyan-100 rounded-lg p-1" href={``}>
              Teacher Lesson
            </Link>
            <Link className="bg-indigo-100 rounded-lg p-1" href={``}>
              Teacher Exam
            </Link>
            <Link className="bg-indigo-100 rounded-lg p-1" href={``}>
              Teacher Assignments
            </Link>
          </div>
        </div>
        <div>
          <TwoLevelPieChart Title="Perfomance" />
        </div>
        <AnnouncementPage />
      </div>
    </div>
  );
};

export default SinglePage;
