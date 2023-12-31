import SideMenu from "@/components/Fasilitator/SideMenu";
import ClassDetail from "@/components/Fasilitator/Detail";
// import Navigation from "@/components/Navigation";
import 'tailwindcss/tailwind.css'

const Reset = () => {
    return (
        <main className="flex flex-col sm:flex-row min-h-screen relative bg-blue-100 gap-15 m-4">
            <SideMenu />
            <ClassDetail />
            {/* <DashboardUser />
      <Chat /> */}
            {/* <Navigation /> */}
        </main>
    );
};

export default Reset;
