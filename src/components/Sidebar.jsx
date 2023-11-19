import React from "react";
import Link from "next/link";
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

const Sidebar = () => {
  return (
    <aside className="bg-white">
      {/* Assuming Notifications is the correct component */}
      <div className="notification">
        {/* <Notifications /> */}
      </div>

      <Link href="./Profile" className="avatar-container cursor-pointer text-link">
        <img
          src={picture}
          className="avatar-image"
          alt=""
        />
        <span className="avatar-name-black">Emir Kharisma</span>
        <span className="avatar-status=black mt-1">Online</span>
      </Link>

      <div className="menu-container">
        <Link href="./Dashboard" className="side-link cursor-pointer text-link">
          <img src={dashboard} alt="" />
          Dashboard
        </Link>
        <Link href="./Activity" className="side-link cursor-pointer text-link">
          <img src={activity} alt="" />
          Activity
        </Link>
        <Link href="./Settings" className="side-link cursor-pointer text-link">
          <img src={settings} alt="" />
          Settings
        </Link>
        <Link href="./Help" className="side-link cursor-pointer text-link">
          <img src={help} alt="help" />
          Help
        </Link>
        <div
        //   onClick={logoutClear}
          className="side-link cursor-pointer text-link"
        >
          <img
            src={logout}
            className="menu-icon text-danger"
            alt="Logout Icon"
          />
          <span className="text-danger">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
