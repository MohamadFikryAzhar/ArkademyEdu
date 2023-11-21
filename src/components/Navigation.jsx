import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import profile from "../app/images/icons/profile-icon.png";
import dashboard from "../app/images/icons/dashboard-icon-black.png";
import activity from "../app/images/icons/activity-icon-black.png";
import logout from "../app/images/icons/logout-icon.svg";
import chat from "../app/images/icons/chat-bubble-icon.png";


const Navigation = () => {
    return (
      <nav>
        <div className="mobile-nav r-20px">
          <Link href="/Profile" className="item r-10px cursor-pointer text-link">
              <span>
                {' '}
                <Image
                  className="icon-mobile"
                  src={profile}
                  alt="profile"
                />
              </span>
          </Link>
          <Link href="/Dashboard" className="item r-10px cursor-pointer text-link">
              <span>
                {' '}
                <Image
                  className="icon-mobile"
                  src={dashboard}
                  alt="dashboard"
                />
              </span>
          </Link>
          <Link href="/Activity" className="item r-10px cursor-pointer">
              <span>
                {' '}
                <Image
                  className="icon-mobile"
                  src={activity}
                  alt="activity"
                />
              </span>
          </Link>
          <div className="item r-10px cursor-pointer">
            <span>
              {' '}
              <Image
                className="icon-mobile style-width"
                src={chat}
                alt=""
              />
            </span>
          </div>
          <Link href="/" /* onClick={logoutClear} */ className="item r-10px cursor-pointer">
              <span>
                <Image
                  className="icon-mobile"
                  src={logout}
                  alt="logout"
                />
              </span>
          </Link>
        </div>
      </nav>
    );
  };
  
  export default Navigation;