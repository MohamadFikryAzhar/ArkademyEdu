import React from "react";
import Link from "next/link";
import Image from "next/image"
import 'tailwindcss/tailwind.css';
// import '../../public/style.css'
// import Notifications from "./Notification";
import picture from "../app/images/photo-profile/profile-picture.png";
import dashboard from "../app/images/icons/dashboard-icon.svg";
import activity from "../app/images/icons/activity-icon.svg";
import settings from "../app/images/icons/settings-icon.png";
import help from "../app/images/icons/help-icon.svg";
import logout from "../app/images/icons/logout-icon.svg";

// function logoutClear() {
//     window.location.replace('/');
//     return localStorage.clear('token');
// }

const SidebarFasilitator = () => {
  return (
    <aside className="bg-blue-400 border rounded-lg p-10">
      {/* Assuming Notifications is the correct component */}
      <div className="notification">
        {/* <Notifications /> */}
      </div>

      <Link href="./profile" className="avatar-container cursor-pointer text-link">
        <Image
          src={picture}
          className="avatar-image w-16 h-16"
          alt=""
        />
        <div className="avatars pt-5 flex flex-col">
          <span className="avatar-name-black mt-1 text-lg font-kanit font-normal text-white">Emir Kharisma</span>
          <span className="avatar-status=black mt-1 text-sm font-kanit font-normal text-white">Online</span>
        </div>
      </Link>

      <div className="menu-container flex flex-col pt-10 gap-5">
        <Link href="./dashboard" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:text-black hover:rounded">
          <Image src={dashboard} alt="" className="w-8 h-8 mr-2 hover:filter-grayscale" />
          <span className='text-white'>Dashboard</span>
        </Link>
        <Link href="./activity" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:rounded">
          <Image src={activity} alt="" className="w-8 h-8 mr-2" />
          <span className='text-white'>Activity</span>
        </Link>
        <Link href="./settings" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:rounded">
          <Image src={settings} alt="" className="w-8 h-8 mr-2" />
          <span className='text-white'>Settings</span>
        </Link>
        <Link href="./help" className="side-link cursor-pointer text-link flex items-center gap-5 hover:bg-blue-500 hover:rounded">
          <Image src={help} alt="help" className="w-8 h-8 mr-2" />
          <span className='text-white'>Help</span>
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
          <span className="text-danger text-red-500">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default SidebarFasilitator;
