import searchbar from "@/public/search.png";
import sort from "@/public/sort.png";
import Image from "next/image";
import Table from "./Table";
import { parentsData } from "@/lib/data";
import view from "@/public/view.png";
import Modal from "./Modal";

type ParentType = {
  id: number;
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "student Name",
    accessor: "studentName",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ParentsInfo = () => {
  const RenderRow = (item: ParentType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200/70 text-sm hover:bg-slate-50/80 transition-colors duration-200"
    >
      {/* Name & Info */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 leading-tight">
              {item?.name}
            </h3>
            <p className="text-xs text-gray-400">{item?.email}</p>
          </div>
        </div>
      </td>

      {/* Teacher ID */}
      <td className="hidden md:table-cell p-4 text-gray-600 font-medium">
        {item?.students}
      </td>

      <td className="hidden lg:table-cell p-4 text-gray-600  truncate">
        {item?.phone}
      </td>
      {/* Address */}
      <td className="hidden lg:table-cell p-4 text-gray-600  truncate">
        {item?.address}
      </td>

      {/* Actions */}
      <td className="p-4">
        <div className="flex items-center gap-2">
          {/* View Icon */}
          <button className="w-8 h-8 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors flex items-center justify-center cursor-pointer">
            <Image src={view} alt="View" width={16} height={16} />
          </button>

          {/* Delete Icon */}
          <Modal type="delete" table="parent" />
        </div>
      </td>
    </tr>
  );
  return (
    <div className="sm:m-0 sm:p-0 lg:p-2 lg:my-4 bg-white shadow-lg">
      <div className="flex justify-between items-center rounded-xl">
        <h1 className="font-bold hidden md:block">All Parents</h1>
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
              width={25}
              height={25}
              className="cursor-pointer bg-amber-200 rounded-full p-1"
            />
            <Modal type="create" table="parent" />
          </div>
        </div>
      </div>
      <div>
        <Table columns={columns} RenderRow={RenderRow} Data={parentsData} />
      </div>
    </div>
  );
};

export default ParentsInfo;
