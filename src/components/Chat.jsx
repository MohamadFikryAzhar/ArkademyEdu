import React from 'react';
import 'tailwindcss/tailwind.css';
import '../../public/style.css'
import search from "../app/images/icons/search-icon.svg";
import Image from 'next/image';
import plus from "../app/images/icons/circle-plus-icon.svg";
import profilenisa from "../app/images/photo-profile/profile-nisa.png";
import profilegroup from "../app/images/photo-profile/profile-group.png";
import profilerio from "../app/images/photo-profile/profile-rio.png";
import profileisyana from "../app/images/photo-profile/profile-isyana.png";
import profilereza from "../app/images/photo-profile/profile-reza.png"


const Chat = () => {
  return (
    <aside id="chat-container" className="m-0 bg-white border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h3 className="mb-0">Message</h3>
        <Image src={plus} alt="" />
      </div>
      <div className="search-box relative pt-4">
        <Image src={search} alt="search icon" className="absolute top-1/2 transform -translate-y-1/2 left-2 pt-4" />
        <input type="text" placeholder="Search" className="pl-8 py-2 pr-4 rounded-full border border-gray-300 w-full" />
      </div>
      <div className="message-list flex flex-col gap-10 pt-10">
        <div className="message flex flex-row items-center gap-5">
          <Image src={profilenisa} alt="Nisa Sabyan"/>
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name font-kanit text-lg font-normal"><span>Nisa Sabyan</span></div>
              <div className="message-content text-sm font-kanit font-normal text-gray-500">How about number 3?</div>
            </div>
            <div className="message-time-received text-sm font-kanit font-normal text-gray-500 pl-10">10.15 pm</div>
          </div>
        </div>

        <div className="message flex flex-row items-center gap-5">
          <Image src={profilegroup} alt="Nisa Sabyan"/>
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name font-kanit text-lg font-normal"><span>Discussion Group 23</span></div>
              <div className="message-content text-sm font-kanit font-normal text-gray-500">Nissa: Let's Finish the task tomorrow</div>
            </div>
            <div className="message-time-received text-sm font-kanit font-normal text-gray-500 pl-10">9.12 pm</div>
          </div>
        </div>

        <div className="message flex flex-row items-center gap-5">
          <Image src={profilerio} alt="Nisa Sabyan"/>
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name font-kanit text-lg font-normal"><span>Rio Haryanto</span></div>
              <div className="message-content text-sm font-kanit font-normal text-gray-500">I'm Hungry</div>
            </div>
            <div className="message-time-received text-sm font-kanit font-normal text-gray-500 pl-10">9.11 pm</div>
          </div>
        </div>

        <div className="message flex flex-row items-center gap-5">
          <Image src={profileisyana} alt="Nisa Sabyan"/>
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name font-kanit text-lg font-normal"><span>Isyana Sarasvati</span></div>
              <div className="message-content text-sm font-kanit font-normal text-gray-500">Thanks</div>
            </div>
            <div className="message-time-received text-sm font-kanit font-normal text-gray-500 pl-10">8.20 am</div>
          </div>
        </div>

        <div className="message flex flex-row items-center gap-5">
          <Image src={profilereza} alt="Nisa Sabyan"/>
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name font-kanit text-lg font-normal"><span>NReza Arap Oktovian</span></div>
              <div className="message-content text-sm font-kanit font-normal text-gray-500">I will try</div>
            </div>
            <div className="message-time-received text-sm font-kanit font-normal text-gray-500 pl-10">2.10 pm</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Chat;
