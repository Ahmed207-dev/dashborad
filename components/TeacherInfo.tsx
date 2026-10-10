import searchbar from "@/public/search.png";
import sort from "@/public/sort.png";
import Image from "next/image";
import Table from "./Table";
import { teachersData } from "@/lib/data";
import view from "@/public/view.png";
import Link from "next/link";
import Modal from "./Modal";

export interface TeacherType {
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

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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

const TeacherInfo = () => {
  const RenderRow = (item: TeacherType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200/70 text-sm hover:bg-slate-50/80 transition-colors duration-200"
    >
      {/* Name & Info */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full hidden lg:block object-cover "
            src={item?.photo || "/avatar.png"}
            alt={item?.name || "Avatar"}
            width={32}
            height={32}
          />
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
        {item?.teacherId}
      </td>

      {/* Subjects */}
      <td className="hidden md:table-cell p-4 text-gray-600">
        {item?.subjects?.join(", ")}
      </td>

      {/* Classes */}
      <td className="hidden md:table-cell p-4 text-gray-600">
        {item?.classes?.join(", ")}
      </td>

      {/* Phone */}
      <td className="hidden md:table-cell p-4 text-gray-600 whitespace-nowrap">
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
          <Link
            href={`/list/teachers/${item?.id}`}
            className="w-8 h-8 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors flex items-center justify-center cursor-pointer"
          >
            <Image src={view} alt="View" width={16} height={16} />
          </Link>

          {/* Delete Icon */}
          <Modal type="delete" table="teacher" />
        </div>
      </td>
    </tr>
  );
  return (
    <div className="sm:m-0 sm:p-0 lg:p-2 lg:my-4  bg-white shadow-lg">
      <div className="flex justify-between items-center rounded-xl">
        <h1 className="font-bold hidden md:block">All Teachers</h1>
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
            <Modal type="create" table="teacher" />
          </div>
        </div>
      </div>
      <div>
        <Table columns={columns} RenderRow={RenderRow} Data={teachersData} />
      </div>
    </div>
  );
};

export default TeacherInfo;
