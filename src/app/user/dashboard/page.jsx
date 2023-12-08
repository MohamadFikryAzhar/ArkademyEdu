import DashboardUser from "@/components/User/Dashboard";
import SidebarUser from "@/components/SidebarUser";
import Chat from "@/components/Chat";
import 'tailwindcss/tailwind.css';
// import Navigation from "@/components/Navigation";

const DashboardUsers = () => {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen relative bg-blue-100 gap-15 m-4">
      <SidebarUser />
      <DashboardUser />
      <Chat />
      {/* <Navigation /> */}
    </main>
  );
};

export default DashboardUsers;
