import Image from "next/image";
import searchbar from "@/public/search.png";
import messge from "@/public/message.png";
import annoumnce from "@/public/announcement.png";
import avatr from "@/public/avatar.png";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-end md:justify-between w-full items-center p-3 bg-white shadow-lg rounded-lg">
        <div className="hidden md:flex items-center gap-3 ring-2 ring-gray-300 rounded-full px-3 py-1.5 text-sm">
          <Image
            src={searchbar}
            alt="Search"
            width={16}
            height={16}
            className="object-contain"
          />
          <input
            type="text"
            className="outline-none bg-transparent w-full"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2 flex items-center justify-center cursor-pointer">
              <Image src={messge} alt="messages" width={20} height={20} />
            </div>
            <div className="relative bg-white rounded-full p-2 flex items-center justify-center cursor-pointer">
              <Image
                src={annoumnce}
                alt="announcements"
                width={20}
                height={20}
              />
              <div className="absolute text-sx -right-1 -top-1 bg-purple-500 rounded-full w-4 h-4 text-white flex items-center justify-center">
                1
              </div>
            </div>
          </div>

          <div className="flex flex-col text-right leading-tight">
            <span className="font-semibold text-sm">Ahmed Hamdy</span>
            <span className="text-gray-400 text-xs">Student</span>
          </div>

          <Image
            src={avatr}
            alt="avatar"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
