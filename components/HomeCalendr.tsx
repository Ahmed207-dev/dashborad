"use client";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function HomeCalendr() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} className="rounded-lg p-2" />
    </div>
  );
}
export default HomeCalendr;
