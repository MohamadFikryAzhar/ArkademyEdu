// import DashboardUser from "@/components/User/Dashboard";
import SidebarUser from "@/components/SidebarUser";
// import Chat from "@/components/Chat";
import UserActivity from "@/components/User/Activity";
// import Navigation from "@/components/Navigation";
import 'tailwindcss/tailwind.css'

const Reset = () => {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen relative bg-blue-100 gap-15 m-4">
      <SidebarUser />
      <UserActivity />
      {/* <DashboardUser />
      <Chat /> */}
      {/* <Navigation /> */}
    </main>
  );
};

export default Reset;
