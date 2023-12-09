import SideMenu from "@/components/Fasilitator/SideMenu";
import Profile from "@/components/Fasilitator/Profile";
import 'tailwindcss/tailwind.css'

const Reset = () => {
    return (
        <main className="flex flex-col sm:flex-row min-h-screen relative bg-blue-100 gap-15 m-4">
            <SideMenu />
            <Profile />            {/* <DashboardUser />
      <Chat /> */}
            {/* <Navigation /> */}
        </main>
    );
};

export default Reset;
