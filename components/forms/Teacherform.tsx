"use client";

import { FaFileUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type ActionType = "create" | "update";

interface ModalType<T> {
  type: ActionType;
  data?: T;
}

const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 chars" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 chars" }),
  fisrtName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(3, { message: "Last name is required" }),
  phone: z.string().min(11, { message: "Phone must be at least 11 digits" }),
  address: z.string().min(4, { message: "Address is required" }),
  birthday: z.string().min(1, { message: "Birthday is required" }),
  gender: z.enum(["Male", "Female"], { message: "Gender is required" }),
  img: z.any().refine((files) => files && files.length > 0, {
    message: "Image is required",
  }),
});

type FormInputs = z.infer<typeof schema>;

const Teacherform = <T,>({ type, data }: ModalType<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (formData: FormInputs) => {
    console.log("Form Submitted Successfully:", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700"
          >
            UserName
          </label>
          <input
            id="username"
            {...register("username")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.username?.message && (
            <p className="text-red-500 text-xs">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.password?.message && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstName"
            {...register("fisrtName")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.fisrtName?.message && (
            <p className="text-red-500 text-xs">{errors.fisrtName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastName"
            {...register("lastName")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.lastName?.message && (
            <p className="text-red-500 text-xs">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.phone?.message && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            {...register("address")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.address?.message && (
            <p className="text-red-500 text-xs">{errors.address.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="birthday"
            className="text-sm font-medium text-gray-700"
          >
            Birthday
          </label>
          <input
            id="birthday"
            type="date"
            {...register("birthday")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          {errors.birthday?.message && (
            <p className="text-red-500 text-xs">{errors.birthday.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="gender" className="text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            {...register("gender")}
            className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full bg-white"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender?.message && (
            <p className="text-red-500 text-xs">{errors.gender.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <label
          htmlFor="img"
          className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-indigo-500 transition text-gray-600 hover:text-indigo-600"
        >
          <FaFileUpload className="text-xl" />
          <span className="text-sm font-medium">Upload Image</span>
          <input id="img" type="file" {...register("img")} className="hidden" />
        </label>
        {errors.img?.message && (
          <p className="text-red-500 text-xs">{String(errors.img.message)}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-3 rounded-lg transition duration-200 cursor-pointer text-sm sm:text-base"
      >
        Submit
      </button>
    </form>
  );
};

export default Teacherform;
