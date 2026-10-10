"use client";

import Link from "next/link";

const error = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-white shadow-lg p-5 rounded-xl">
        <h1 className="sm:text-6xl md:text-7xl text-red-500">Error</h1>
        <Link
          className="bg-red-500 text-white mt-3 p-2 rounded text-center flex w-fit m-auto"
          href="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default error;
