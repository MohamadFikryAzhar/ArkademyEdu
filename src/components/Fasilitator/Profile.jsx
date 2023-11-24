import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import '../../../public/circle.css';
import '../../../public/style.css';
// import list from "../../app/images/icons/list-icon.svg";
import forward from "../../app/images/icons/forward-icon.svg";
// import search from "../../app/images/icons/search-icon.svg";
import cover from "../../app/images/img/profile-background.png";
import profile from "../../app/images/photo-profile/profile-peppy.png";
import edit from "../../app/images/icons/edit-icon.svg";
import phone from "../../app/images/icons/phone-icon.svg";
import stars from "../../app/images/icons/triple-star-icon.svg";
import chat from "../../app/images/icons/chat-icon.svg";
import nono from "../../app/images/icons/no-notification-icon.svg";
import privacy from "../../app/images/icons/privacy-icon.svg";
import storage from "../../app/images/icons/storage-icon.svg";
import profilepict from "../../app/images/photo-profile/profile-picture.png";



function Profile(props) {
        return (
            <>
                {/* <MobileNav /> */}
                <div className="dashboard-container">
                    {/* <SideMenu /> */}
                    <div id="main-content">
                        <div className="image-cover-container">
                            <Image src={cover} alt="Profile Background" className="image-cover" />
                            <div className="avatar-lg">
                                <div className="flex">
                                    <Image src={profile} className="avatar-image-lg" alt="Avatar" />
                                    <Image src={edit} className="edit-avatar" alt="Edit Icon" />
                                </div>
                                <span>Emir Kharisma</span>
                            </div>
                        </div>
                        <div className="profile-setting">
                            <h1>Profile Setting</h1>
                            <div className="setting-list">
                                <div className="setting-container">
                                    <div className="flex flex-col w-100">
                                        <div className="flex justify-between">
                                            <div>
                                                <Image src={phone}alt="Phone Icon" className="setting-icon" />
                                                Phone Number
                                            </div>
                                            <Image src={forward} alt="Forward Icon" />
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-container">
                                    <div className="flex flex-col w-100">
                                        <div className="flex justify-between">
                                            <div>
                                                <Image src={stars} alt="Triple Start Icon" className="setting-icon" />
                                                Change Password
                                            </div>
                                            <Image src={forward} alt="Forward Icon" />
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-container">
                                    <div className="flex flex-col w-100">
                                        <div className="flex justify-between">
                                            <div>
                                                <Image src={chat} alt="Chat Icon" className="setting-icon" />
                                                Chat Settings
                                            </div>
                                            <Image src={forward} alt="Forward Icon" />
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-container">
                                    <div className="flex flex-col w-100">
                                        <div className="flex justify-between">
                                            <div>
                                                <Image src={nono} alt="No Notifications Icon" className="setting-icon" />
                                                Push Notifications
                                            </div>
                                            <Image src={forward} alt="Forward Icon" />
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-container">
                                    <div className="flex flex-col w-100">
                                        <div className="flex justify-between">
                                            <div>
                                                <Image src={privacy} alt="Security & Privacy" className="setting-icon" />
                                                Privacy and Security
                                            </div>
                                            <Image src={forward} alt="Forward Icon" />
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-container">
                                    <div className="flex flex-col w-100">
                                        <div className="flex justify-between">
                                            <div>
                                                <Image src={storage} alt="Storage Icon" className="setting-icon" />
                                                Data and Storage
                                            </div>
                                            <Image src={forward} alt="Forward Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

export default Profile;
