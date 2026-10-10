import Image from "next/image";
import More from "@/public/more.png";
const UserCard = ({ type, number }: { type: string; number: string }) => {
  return (
    <div className="rounded-2xl odd:bg-indigo-100 even:bg-amber-100 p-4 flex-1 ">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-gray-600 font-medium">
          2026/4/5
        </span>
        <Image
          src={More}
          alt="More"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <h1 className="text-2xl font-semibold text-gray-800">{number}</h1>
        <h2 className="capitalize text-sm font-medium text-gray-600">{type}</h2>
      </div>
    </div>
  );
};

export default UserCard;
