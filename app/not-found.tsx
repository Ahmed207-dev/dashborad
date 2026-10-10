import Link from "next/link";

const notFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-white shadow-lg p-5 rounded-xl">
        <h1 className="sm:text-2xl lg:text-7xl font-bold">404 | Not-Found </h1>
        <Link
          className="bg-black mt-4 text-white p-2 rounded text-center flex w-fit m-auto"
          href="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default notFoundPage;
