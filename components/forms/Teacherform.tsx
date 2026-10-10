"use client";
import { FaFileUpload } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // or 'zod/v4'
type ActionType = "create" | "update";

interface ModalType<T> {
  type: ActionType;
  data?: T;
}

const schema = z.object({
  username: z.string().min(3, { message: "Required" }),
  email: z.string().email({ message: "Required" }),
  age: z.number().min(10),
  password: z.string().min(8, { message: "password must be at least 8" }),
  fisrtName: z.string().min(3, { message: "Required" }),
  lastName: z.string().min(3, { message: "Required" }),

  phone: z.number().min(11, { message: "Required" }),
  address: z.string().min(4, { message: "address" }),

  birthday: z.date({ message: "Required" }),
  gender: z.enum(["Male", "Female"], { message: "Required" }),
  img: z.instanceof(File, { message: "Required" }),
});

const Teacherform = <T,>({ type, data }: ModalType<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))} className="flex-col">
      <div className="flex justify-between items-center gap-3 my-3">
        <label htmlFor="username" className="flex flex-col gap-2 text-gray-400">
          UserName
          <input
            {...register("username")}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}
        </label>

        <label htmlFor="email" className="flex flex-col gap-2 text-gray-400">
          E-Mail
          <input
            type="email"
            {...register("email")}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </label>

        <label htmlFor="email" className="flex flex-col gap-2 text-gray-400">
          Password
          <input
            type="password"
            {...register("password")}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </label>
      </div>

      <div className="flex justify-between items-center gap-2 my-3">
        <label
          htmlFor="fisrtName"
          className="flex flex-col gap-2 text-gray-400"
        >
          FisrtName
          <input
            {...register("fisrtName")}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.fisrtName?.message && (
            <p className="text-red-500">{errors.fisrtName?.message}</p>
          )}
        </label>

        <label htmlFor="lastName" className="flex flex-col gap-2 text-gray-400">
          LastName
          <input
            {...register("lastName")}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.lastName?.message && (
            <p className="text-red-500">{errors.lastName?.message}</p>
          )}
        </label>

        <label htmlFor="email" className="flex flex-col gap-2 text-gray-400">
          Phone
          <input
            type="number"
            {...register("phone", { valueAsNumber: true })}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.phone?.message && (
            <p className="text-red-500">{errors.phone?.message}</p>
          )}
        </label>
      </div>

      <div className="flex justify-between items-center gap-2 my-3">
        <label htmlFor="address" className="flex flex-col gap-2 text-gray-400">
          Address
          <input
            {...register("address")}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.address?.message && (
            <p className="text-red-500">{errors.address?.message}</p>
          )}
        </label>

        <label htmlFor="birthday" className="flex flex-col gap-2 text-gray-400">
          birthday
          <input
            type="date"
            {...register("birthday")}
            className="border border-gray-400 rounded-lg p-1 outline-0"
          />
          {errors.birthday?.message && (
            <p className="text-red-500">{errors.birthday?.message}</p>
          )}
        </label>

        <label htmlFor="email" className="flex flex-col gap-2 text-gray-400">
          gender
          <select
            className="border border-gray-400 rounded-lg p-1 outline-0"
            {...register("gender")}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender?.message && (
            <p className="text-red-500">{errors.gender?.message}</p>
          )}
        </label>
      </div>
      <div className="flex justify-between items-center gap-2 my-3 p-2">
        <label htmlFor="img" className="flex gap-2 text-gray-400 items-center">
          <FaFileUpload />
          <input type="file" {...register("img")} className=" outline-0" />
          {errors.img?.message && (
            <p className="text-red-500">{errors.img?.message}</p>
          )}
        </label>
      </div>
      <input
        type="submit"
        className="bg-indigo-400 text-white w-full  p-2 rounded-lg cursor-pointer"
      />
    </form>
  );
};

export default Teacherform;
