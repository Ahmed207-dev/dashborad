"use client";

import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white p-3 flex flex-col gap-4 border-r border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 p-2 justify-center md:justify-start">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-gray-800"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="hidden md:block text-lg tracking-tight">
            SchoolLama
          </span>
        </Link>
      </div>

      <nav className="flex flex-col gap-4">
        {menuItems.map((section, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="hidden md:block text-xs font-semibold text-gray-400 uppercase px-3 my-1">
              {section.title}
            </span>

            <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible [&::-webkit-scrollbar]:hidden">
              {section.items
                .filter((item) => item.visible.includes(role))
                .map((menu) => {
                  const isActive = pathname === menu.href;
                  return (
                    <Link
                      key={menu.label}
                      href={menu.href}
                      className={`flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-purple-600 text-white shadow-md shadow-purple-200"
                          : "text-gray-500 hover:bg-purple-50 hover:text-purple-600"
                      }`}
                    >
                      <Image
                        src={menu.icon}
                        alt={menu.label}
                        width={20}
                        height={20}
                        className={`shrink-0 transition-all ${
                          isActive ? "brightness-200 invert" : "opacity-70"
                        }`}
                      />
                      <span className="hidden md:block">{menu.label}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
