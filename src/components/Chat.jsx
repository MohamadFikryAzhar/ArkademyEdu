import React from 'react';
import search from "../app/images/icons/search-icon.svg";
import plus from "../app/images/icons/circle-plus-icon.svg";
import profilenisa from "../app/images/photo-profile/profile-nisa.png";


const Chat = () => {
  return (
    <aside id="chat-container" className="m-0">
      <div className="flex justify-between items-center">
        <h3 className="mb-0">Message</h3>
        <img src={plus} alt="" />
      </div>
      <div className="search-box p-2 r-20px">
        <img src={search} alt="search icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="message-list">
        <div className="message">
          <img src={profilenisa} alt="Nisa Sabyan" />
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name"><span>Nisa Sabyan</span></div>
              <div className="message-content">How about number 3?</div>
            </div>
            <div className="message-time-received">10.15 pm</div>
          </div>
        </div>

        <div className="message">
          <img src={profilenisa} alt="Nisa Sabyan" />
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name"><span>Discussion Group 21 (5)</span></div>
              <div className="message-content">Nissa: Let's finish the task tomorrow</div>
            </div>
            <div className="message-time-received">1.23 pm</div>
          </div>
        </div>

        <div className="message">
          <img src={profilenisa} alt="Nisa Sabyan" />
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name"><span>Rio Dewanto</span></div>
              <div className="message-content">I'm Hungry</div>
            </div>
            <div className="message-time-received">9.12 pm</div>
          </div>
        </div>

        <div className="message">
          <img src={profilenisa} alt="Nisa Sabyan" />
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name"><span>Nisa Sabyan</span></div>
              <div className="message-content">How about number 3?</div>
            </div>
            <div className="message-time-received">10.15 pm</div>
          </div>
        </div>

        <div className="message">
          <img src={profilenisa} alt="Nisa Sabyan" />
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name"><span>Nisa Sabyan</span></div>
              <div className="message-content">How about number 3?</div>
            </div>
            <div className="message-time-received">10.15 pm</div>
          </div>
        </div>

        <div className="message">
          <img src={profilenisa} alt="Uus" />
          <div className="flex justify-between flex-grow-1">
            <div>
              <div className="sender-name"><span>Uus</span></div>
              <div className="message-content">Haha me too</div>
            </div>
            <div className="message-time-received">11/8</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Chat;
