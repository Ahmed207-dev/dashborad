import HomePage from "@/components/HomePage";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex-1">
          <Menu />
        </div>
        <div className="flex-3">
          <Navbar />
          <HomePage />
        </div>
      </div>
    </>
  );
}
