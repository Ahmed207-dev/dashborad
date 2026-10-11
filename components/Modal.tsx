"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Teacherform from "./forms/Teacherform";

type ActionType = "create" | "update" | "delete";
type TableType =
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "event"
  | "announcement";
interface ModalType<T> {
  type: ActionType;
  table: TableType;
  data?: T[];
  id?: string;
}

const Modal = <T,>({ type, data, id, table }: ModalType<T>) => {
  const [open, setOpen] = useState(false);

  const Styleing =
    type === "create"
      ? "cursor-pointer bg-amber-200 rounded-full p-1"
      : type === "delete"
        ? "w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors flex items-center justify-center cursor-pointer"
        : type === "update"
          ? "w-8 h-8 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors flex items-center justify-center cursor-pointer"
          : "";

  const formsData: Record<string, any> = {
    teacher: (type: any, data?: string | undefined) => (
      <Teacherform type={type} data={data} />
    ),
  };
  const Form = () => {
    return type === "delete" ? (
      <form
        action=""
        className="flex justify-center flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <h3 className="font-semibold text-sm">
          All Data Will Be Deleted Are You Sure? {table}
        </h3>
        <button className="bg-red-500 rounded-lg text-white">Delete</button>
      </form>
    ) : type === "create" || type === "update" ? (
      formsData[table] ? (
        formsData[table](type, data)
      ) : (
        "Form not found!"
      )
    ) : null;
  };

  return (
    <>
      <button className={Styleing} onClick={() => setOpen(!open)}>
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          {/* Container المودال مع خاصية Scroll للشاشات الصغيرة */}
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8">

            <h1 className="font-bold text-xl sm:text-2xl text-gray-800 mb-6">
              {type === "create" ? "Create New Teacher" : "Update Teacher"}
            </h1>
            <Form />
            <button
              className="absolute top-0 right-0 cursor-pointer text-lg"
              onClick={() => setOpen(false)}
            >
              <IoMdClose className="m-2" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
