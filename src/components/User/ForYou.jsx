import React /*{ useEffect, useRef }*/ from 'react';
// import { connect } from 'react-redux';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
// import Navigation from '../Navigation';
// import Sidebar from '../Sidebar';
// import Chat from '../Chat';
import news from "../../app/images/img/news-image-1.jpg";
import calendar from "../../app/images/icons/calendar-icon.svg";
// import toga from "../../app/images/icons/toga-icon.png";
import task from "../../app/images/icons/new-icon.png";
import '../../../public/style.css';
import dots from "../../app/images/icons/3-dots.png";
import money from "../../app/images/icons/money-icon.png";
import history from "../../app/images/icons/history-icon.png"
import computer from "../../app/images/icons/software-icon.png"

// import { getMyClassFasilitator } from '../../../Redux/ActionCreators/GetMyClassFasilitator';

function ForUser(props) {
    //   const { getMyClassFasilitatorReducer, getMyClass } = props;
    //   const getRef = useRef();

    //   useEffect(() => {
    //     if (!getRef.current) {
    //       getMyClass();
    //       getRef.current = true;
    //     }
    //   }, []);

    return (
        <>
            {/* <Navigation /> */}
            <div className="dashboard-container">
                {/* <Sidebar/> */}
                <div id="dashboard-peserta">
                    <div className="news-card r-10px mb-10">
                        <h5 className="news-title text-2xl font-montserrat font-bold py-6 px-4">News</h5>
                        <div className="news-image-container relative h-72 overflow-hidden r-10px">
                            <Image
                                className="w-full h-full object-cover"
                                src={news}
                                alt="microsoft"
                            />
                            <div className="carousel-indicators"></div>
                        </div>
                    </div>
                    <div className="news-card r-10px mt-3">
                        <div className="flex justify-between">
                            <h5 className="news-title px-5">Today, October 16</h5>
                            <Image src={calendar} alt="" className="px-4" />
                        </div>
                        <div className="news-image-container mt-3">
                            <div className="flex justify-evenly date-group">
                                <div className="flex flex-col items-center justify-center date-container">
                                    <span className="date-day">Fr</span>
                                    <span className="date">12</span>
                                </div>
                                <div className="flex flex-col items-center justify-center date-container">
                                    <span className="date-day">Sa</span>
                                    <span className="date">13</span>
                                </div>
                                <div className="flex flex-col items-center justify-center date-container">
                                    <span className="date-day">Su</span>
                                    <span className="date">14</span>
                                </div>
                                <div className="flex flex-col items-center justify-center date-container">
                                    <span className="date-day">Mo</span>
                                    <span className="date">15</span>
                                </div>
                                <div className="flex flex-col items-center justify-center date-container active">
                                    <span className="date-day">Tu</span>
                                    <span className="date">16</span>
                                </div>
                                <div className="flex flex-col items-center justify-center date-container">
                                    <span className="date-day">We</span>
                                    <span className="date">17</span>
                                </div>
                                <div className="flex flex-col items-center justify-center date-container">
                                    <span className="date-day">Th</span>
                                    <span className="date">18</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center py-3 text-style">
                                <Link href="./dashboard" className="cursor-pointer text-color text-link text-gray-600">All schedule&nbsp;</Link>
                                <Link href="./foryou" className="cursor-pointer text-color-2 text-link text-blue-400">For You</Link>
                            </div>
                            <div className="hr-sect text-2xl font-bold">8:00</div>
                            <div className="show">
                                {/* {getMyClassReducer.isPending ? (
                                    <div className="text-gray-600"> Loading... </div>
                                ) : (
                                    <> */}
                                {/* {getMyClassReducer.isFulfilled
                                            ? getMyClassReducer.results.map((my) => ( */}
                                <div className="date-detail flex-row gap-5 overflow-x-scroll w-full justify-between pb-10">
                                    <div className="date-time min-w-[200px]">
                                        <span className="text-span">Banking<Image align="right"
                                            className="dots-top pt-5 pl-5" src={dots} alt="" /></span>
                                        <span className="text-span-1">100 Minutes <Image align="right" className="money-top"
                                            src={money} alt="" /></span>
                                    </div>
                                    <div className="date-time-1 mt-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-span-2"></span>
                                            <span className="span-line w-2/3 h-0.5 bg-gray-400"></span>
                                        </div>
                                    </div>
                                </div>

                                {/* ))
                                            : null} */}
                                {/* )} */}
                            </div>
                            <div className="hr-sect text-2xl font-bold">11:00</div>
                            <div className="show">
                                {/* {getMyClassReducer.isPending ? (
                                    <div className="text-gray-600"> Loading... </div>
                                ) : (
                                    <> */}
                                {/* {getMyClassReducer.isFulfilled
                                            ? getMyClassReducer.results.map((my) => ( */}
                                <div className="date-detail flex-row gap-5 overflow-x-scroll w-full justify-between pb-10">
                                    <div className="date-time min-w-[200px]">
                                        <span className="text-span">BackEnd Golang<Image align="right"
                                            className="dots-top pt-5 pl-5" src={dots} alt="" /></span>
                                        <span className="text-span-1">120 Minutes <Image align="right" className="money-top w-1/2 h-1/2"
                                            src={computer} alt="" /></span>
                                    </div>
                                    <div className="date-time-1 mt-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-span-2"></span>
                                            <span className="span-line w-2/3 h-0.5 bg-gray-400"></span>
                                        </div>
                                    </div>
                                </div>

                                {/* ))
                                            : null} */}
                                {/* )} */}
                                <div className="hr-sect text-2xl font-bold">Finish</div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <Chat className="bg-white border-gray" /> */}
            </div >
        </>
    );
}

// const mapStateToProps = (state) => {
//   const { getMyClassFasilitatorReducer } = state;
//   return {
//     getMyClassFasilitatorReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getMyClass: () =>
//       dispatch(
//         getMyClassFasilitator('http://localhost:000/courses/api/myClassFasilitator/?page=1&limit=3')
//       ),
//   };
// };

// const ConnectedDashboardFasilitator = connect(mapStateToProps, mapDispatchToProps)(DashboardFasilitator);

export default ForUser;
