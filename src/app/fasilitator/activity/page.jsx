// import DashboardFasilitator from "@/components/Fasilitator/Dashboard";
import SidebarFasilitator from "@/components/SidebarFasilitator";
import ActivityFasilitator from "@/components/Fasilitator/Activity";
// import Chat from "@/components/Chat";
// import Navigation from "@/components/Navigation";

const Reset = () => {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen relative bg-blue-100 gap-15 m-4">
      <SidebarFasilitator />
      <ActivityFasilitator />
      {/* <DashboardFasilitator />
      <Chat /> */}
      {/* <Navigation /> */}
    </main>
  );
};

export default Reset;
