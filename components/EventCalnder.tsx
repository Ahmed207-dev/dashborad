"use client";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";
import More from "@/public/moreDark.png";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalnder = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl">Event</h1>
        <Image src={More} alt="" width={20} height={20} />
      </div>
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white shadow-lg mb-2 p-4 rounded-lg border-t-2 odd:border-amber-200 even:border-indigo-200"
        >
          <div className="flex justify-between ">
            <h1>{event.title}</h1>
            <span className="text-xs text-gray-400">{event.time}</span>
          </div>
          <p className="text-sm text-gray-500">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventCalnder;
