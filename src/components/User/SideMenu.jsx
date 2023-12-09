import React from "react";
import Link from "next/link";
import Image from "next/image"
import 'tailwindcss/tailwind.css';
// import '../../public/style.css'
// import Notifications from "./Notification";
// import picture from "../app/images/photo-profile/profile-picture.png";
import dashboard from "../../app/images/icons/dashboard-icon.svg";
import activity from "../../app/images/icons/activity-icon.svg";
// import settings from "../app/images/icons/settings-icon.png";
import help from "../../app/images/icons/help-icon.svg";
import logout from "../../app/images/icons/logout-icon.svg";
import profile from "../../app/images/photo-profile/profile-peppy.png"

// function logoutClear() {
//     window.location.replace('/');
//     return localStorage.clear('token');
// }

const SidebarUser = () => {
    return (
        <aside className="bg-blue-400 border rounded-lg p-2 sm:p-10">
            {/* Assuming Notifications is the correct component */}
            <div className="notification">
                {/* <Notifications /> */}
            </div>

            <Link href="./profile" className="avatar-container cursor-pointer text-link sm:p-0">
                <Image
                    src={profile}
                    className="avatar-image w-10 h-10 sm:w-16 sm:h-16 hidden sm:block"
                    alt=""
                />
                <div className="avatars sm:pt-5 flex flex-col">
                    <span className="avatar-name-black mt-1 text-lg font-kanit font-normal text-white">Mohamad Fikry Azhar</span>
                    <span className="avatar-status=black mt-1 text-sm font-kanit font-normal text-white">Online</span>
                </div>
            </Link>

            <div className="menu-container flex sm:flex-col sm:pt-10 gap-5 pl-3 sm:pl-0">
                <Link href="./dashboard" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:text-black hover:rounded">
                    <Image src={dashboard} alt="" className="w-8 h-8 mr-2 hover:filter-grayscale" />
                    <span className='text-white hidden sm:block'>Dashboard</span>
                </Link>
                <Link href="./activity" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:rounded">
                    <Image src={activity} alt="" className="w-8 h-8 mr-2" />
                    <span className='text-white hidden sm:block'>Activity</span>
                </Link>
                {/* <Link href="./settings" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:rounded">
                    <Image src={settings} alt="" className="w-8 h-8 mr-2" />
                    <span className='text-white hidden sm:block'>Settings</span>
                </Link> */}
                <Link href="./help" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:rounded">
                    <Image src={help} alt="help" className="w-8 h-8 mr-2" />
                    <span className='text-white hidden sm:block'>Help</span>
                </Link>
                <Link href='../../auth/login'
                    //   onClick={logoutClear}
                    className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:rounded"
                >
                    <Image
                        src={logout}
                        className="menu-icon text-danger w-8 h-8 mr-2"
                        alt="Logout Icon"
                    />
                    <span className="text-danger text-red-500 hidden sm:block">Logout</span>
                </Link>
            </div>
        </aside>
    );
};

export default SidebarUser;
