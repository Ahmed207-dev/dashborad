"use client";

import { FaFileUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type ActionType = "create" | "update";

interface ModalType<T> {
  type: ActionType;
  data?: T;
  onClose?: () => void;
}

// Zod Schema المعدلة
const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 chars" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 chars" }),
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(3, { message: "Last name is required" }),
  phone: z.string().min(11, { message: "Phone number must be at least 11 digits" }),
  address: z.string().min(4, { message: "Address is required" }),
  birthday: z.string().min(1, { message: "Birthday is required" }),
  gender: z.enum(["Male", "Female"], { message: "Gender is required" }),
  img: z.any().refine((files) => files && files.length > 0, "Image is required"),
});

type FormInputs = z.infer<typeof schema>;

const Teacherform = <T,>({ type, data, onClose }: ModalType<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (formData: FormInputs) => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      {/* Container المودال مع خاصية Scroll للشاشات الصغيرة */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8">
        
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition text-xl p-1"
        >
          ✕
        </button>

        <h1 className="font-bold text-xl sm:text-2xl text-gray-800 mb-6">
          {type === "create" ? "Create New Teacher" : "Update Teacher"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* شبكة مدخلات التجاوب (CSS Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* UserName */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
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

            {/* Email */}
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

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
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

            {/* First Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                {...register("firstName")}
                className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              {errors.firstName?.message && (
                <p className="text-red-500 text-xs">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
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

            {/* Phone */}
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

            {/* Address */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="address" className="text-sm font-medium text-gray-700">
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

            {/* Birthday */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="birthday" className="text-sm font-medium text-gray-700">
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

            {/* Gender */}
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

          {/* Upload Image Field */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-3 rounded-lg transition duration-200 cursor-pointer text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teacherform;