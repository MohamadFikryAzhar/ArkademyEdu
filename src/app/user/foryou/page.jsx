import ForUser from "@/components/User/ForYou";
import SidebarUser from "@/components/SidebarUser";
import Chat from "@/components/Chat";
// import Navigation from "@/components/Navigation";

const Reset = () => {
    return (
        <main className="flex min-h-screen relative bg-blue-100 gap-15">
            <SidebarUser />
            <ForUser />
            <Chat />
            {/* <Navigation /> */}
        </main>
    );
};

export default Reset;