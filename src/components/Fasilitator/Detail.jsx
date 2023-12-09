import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import '../../../public/circle.css';
import '../../../public/style.css';
// import list from "../../app/images/icons/list-icon.svg";
import forward from "../../app/images/icons/forward-icon.svg";
// import search from "../../app/images/icons/search-icon.svg";
import cover from "../../app/images/img/class-detail-cover.png";
import software from "../../app/images/icons/software-category-icon.svg"
// import MobileNav from '../../../components/Mobile-Nav';
// import SideMenu from '../../../components/Side-Menu';

function ClassDetail() {
    return (
        <>
            {/* <MobileNav /> */}
            <div className="dashboard-container">
                {/* <SideMenu /> */}
                <div id="main-content" className="bg-transparent p-3 flex flex-col justify-start">
                    <h1 className="flex items-center">
                        <Link href="../activity">
                            <Image className="rotate-180" src={forward} alt="prev page" />
                        </Link>
                        Fundamental
                    </h1>
                    <div className="card bg-white border-0 p-0 rounded-lg">
                        <div className="class-detail-cover-container">
                            <Image
                                src={cover}
                                className="class-cover-image rounded-tl-2xl rounded-tr-2xl"
                                alt="Cover"
                            />
                            <div className="cover-description">
                                <div className="category-icon-container rounded-xl w-20 h-20 sm:w-auto sm:h-auto">
                                    <Image src={software} alt="software category" />
                                </div>
                                <div className="cover-description-content">
                                    <div>
                                        <h2 className="cover-title text-2xl md:text-4xl lg:text-6xl">Fundamental</h2>
                                        <div className="cover-description-level">
                                            <span>Level: Beginner</span>
                                            <span>Category: Software</span>
                                            <span>Price: Free</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-header border-0 col-12 col-md-12 col-lg-12 p-0 mt-10 pt-10"></div>
                        <div className="card-body">
                            <div className="class-description-container">
                                <div className="tab-menu-container">
                                    <Link href="./class/detail" className="tab-menu active cursor-pointer text-link">
                                        Information
                                    </Link>
                                    <Link href="./progress" className="tab-menu cursor-pointer text-link">
                                        Class Progress
                                    </Link>
                                    <div className="tab-menu">Class Discussion</div>
                                    <Link href="../fasilitator/class/members" className="tab-menu cursor-pointer text-link">
                                        Members
                                    </Link>
                                </div>
                                <div className="description">
                                    <h3>Description</h3>
                                    <p>
                                        Javascript from the basic for beginner. JavaScript is a programming language that adds
                                        interactivity to your website. This happens in games, in the behavior of responses when buttons
                                        are pressed or with data entry on forms; with dynamic styling; with animation, etc. This class
                                        helps you get started with JavaScript and furthers your understanding of what is possible.
                                    </p>
                                    <h3>What will I learn?</h3>
                                    <p>
                                        <ul className="list-disc pl-6">
                                            <li>JavaScript from scratch - beginner to advanced</li>
                                            <li>Everything you need to become a JavaScript expert and apply for JavaScript jobs</li>
                                            <li>All about variables, functions, objects and arrays</li>
                                            <li>Deep dives into prototypes, JavaScript engines & how it works behind the scenes</li>
                                            <li>Event handling, asynchronous coding and Http requests</li>
                                            <li>All core features and concepts you need to know in modern JavaScript development</li>
                                            <li>And so much more!</li>
                                        </ul>
                                    </p>
                                    <h3>Requirements</h3>
                                    <p>
                                        <ul className="list-disc pl-6">
                                            <li>NO prior JavaScript knowledge is required</li>
                                            <li>Basic web development knowledge is recommended</li>
                                            <li>Basic understanding of HTML and CSS helps but is NOT required</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassDetail;
