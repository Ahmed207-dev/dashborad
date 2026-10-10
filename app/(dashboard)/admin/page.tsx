import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinacnePage from "@/components/FinacnePage";
import EventCalnder from "@/components/EventCalnder";
import AnnouncementPage from "@/components/AnnouncementPage";
const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-2">
      <div className="flex-2">
        <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-4">
          <UserCard type="student" number="6,716" />
          <UserCard type="admin" number="1,232" />
          <UserCard type="teacher" number="2,712" />
          <UserCard type="parent" number="3,321" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-1/3 h-110">
            <CountChart />
          </div>

          <div className="w-full lg:w-2/3 h-110">
            <AttendanceChart />
          </div>
        </div>
        <div className=" w-full h-110">
          <FinacnePage />
        </div>
      </div>
      <div className="flex-1">
        <div>
          <EventCalnder />
          <AnnouncementPage />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
