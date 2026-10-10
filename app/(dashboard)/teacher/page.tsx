import AnnouncementPage from "@/components/AnnouncementPage";
import BigCalnder from "@/components/BigCalnder";

const TeacherPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-2">
      <div className="flex-2">
        <BigCalnder />
      </div>
      <div className="flex-1">
        <div>
          <AnnouncementPage />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
