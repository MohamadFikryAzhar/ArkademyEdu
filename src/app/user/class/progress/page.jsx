// import DashboardUser from "@/components/User/Dashboard";
// import SidebarUser from "@/components/SidebarUser";
import SideMenu from "@/components/User/SideMenu";
import ClassProgress from "@/components/User/Progress";
import 'tailwindcss/tailwind.css'

const Reset = () => {
    return (
        <main className="flex flex-col sm:flex-row min-h-screen relative bg-blue-100 gap-15 m-4">
            <SideMenu />
            <ClassProgress />
            {/* <DashboardUser />
      <Chat /> */}
            {/* <Navigation /> */}
        </main>
    );
};

export default Reset;
