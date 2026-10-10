import searchbar from "@/public/search.png";
import sort from "@/public/sort.png";
import create from "@/public/create.png";
import Image from "next/image";
import Table from "./Table";
import { resultsData } from "@/lib/data";
import deleteicon from "@/public/delete.png";
import view from "@/public/view.png";

type ResultType = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

const columns = [
  {
    header: "Lesson Name",
    accessor: "subject Name",
  },
  {
    header: "student",
    accessor: "student",
    className: "hidden lg:table-cell",
  },
  {
    header: "score",
    accessor: "score",
    className: "hidden lg:table-cell",
  },
  {
    header: "teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "class",
    accessor: "class",
    className: "hidden lg:table-cell",
  },
  {
    header: "date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ResultsInfo = () => {
  const RenderRow = (item: ResultType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200/70 text-sm hover:bg-slate-50/80 transition-colors duration-200"
    >
      {/* Name & Info */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 leading-tight">
              {item?.subject}
            </h3>
          </div>
        </div>
      </td>

      <td className="hidden md:table-cell p-4 text-gray-600 font-medium">
        {item?.student}
      </td>

      <td className="hidden md:table-cell p-4 text-gray-600 font-medium">
        {item?.score}
      </td>

      <td className="hidden md:table-cell p-4 text-gray-600 font-medium">
        {item?.teacher}
      </td>

      <td className="hidden md:table-cell p-4 text-gray-600 font-medium">
        {item?.class}
      </td>

      <td className="hidden md:table-cell p-4 text-gray-600 font-medium">
        {item?.date}
      </td>

      <td className="p-4">
        <div className="flex items-center gap-2">
          {/* View Icon */}
          <button className="w-8 h-8 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors flex items-center justify-center cursor-pointer">
            <Image src={view} alt="View" width={16} height={16} />
          </button>

          {/* Delete Icon */}
          <button className="w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors flex items-center justify-center cursor-pointer">
            <Image src={deleteicon} alt="Delete" width={16} height={16} />
          </button>
        </div>
      </td>
    </tr>
  );
  return (
    <>
      <div className="sm:m-0 sm:p-0 lg:p-2 lg:my-4 bg-white shadow-lg">
        <div className="flex justify-between items-center rounded-xl">
          <h1 className="font-bold hidden md:block">All Assignments</h1>
          <div className="flex justify-center items-center gap-4 flex-col md:flex-row w-100">
            <div className="flex items-center justify-center gap-3 ring-1 rounded-full p-2 ring-gray-300">
              <Image
                src={searchbar}
                alt="Search-Teacher"
                width={20}
                height={20}
              />
              <input
                type="text"
                className="outline-0"
                placeholder="Search..."
                suppressHydrationWarning
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                src={sort}
                alt="Sort"
                width={30}
                height={30}
                className="cursor-pointer bg-amber-200 rounded-full p-1"
              />
              <Image
                src={create}
                alt="Sort"
                width={30}
                height={30}
                className="cursor-pointer bg-amber-200 rounded-full p-1"
              />
            </div>
          </div>
        </div>
        <div>
          <Table columns={columns} RenderRow={RenderRow} Data={resultsData} />
        </div>
      </div>
    </>
  );
};

export default ResultsInfo;
