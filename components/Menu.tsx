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
  const pasthname = usePathname();

  const IsActive = (stat: string) => {
    return stat === pasthname
      ? "flex items-center justify-center md:justify-start p-3 gap-2 text-gray-500 hover:bg-gray-100 bg-gray-100"
      : "flex items-center justify-center md:justify-start p-3 gap-2 text-gray-500 hover:bg-gray-100";
  };
  return (
    <div className="bg-white shadow-2xl">
      <div className="flex items-center gap-2 p-2 justify-center md:justify-start">
        <Image src={Logo} alt="Logo" width={32} height={32} />
        <Link href="/" className="hidden md:block font-bold ">
          SchoolLama
        </Link>
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <span className="hidden md:block text-gray-400 p-2 my-3">
            {item.title}
          </span>
          <span>
            {item.items.map((menu, i) => {
              if (menu.visible.includes(role)) {
                return (
                  <Link
                    key={i}
                    href={menu.href}
                    className={IsActive(menu.href)}
                  >
                    <Image
                      src={menu.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0  md:shrink-2"
                    />
                    <span className="hidden md:block">{menu.label}</span>
                  </Link>
                );
              }
            })}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
