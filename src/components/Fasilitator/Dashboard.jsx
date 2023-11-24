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
import '../../../public/style.css'

// import { getMyClassFasilitator } from '../../../Redux/ActionCreators/GetMyClassFasilitator';

function DashboardFasilitator(props) {
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
              <h5 className="news-title px-5">My Class</h5>
              <Image src={calendar} alt="" className="px-4" />
            </div>
            <h5 className="news-title px-5 text-center">October 2020</h5>
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
              <div className="fasilitator-wrapper">
                {/* {getMyClassFasilitatorReducer.isPending ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    {getMyClassFasilitatorReducer.isFulfilled ? (
                      getMyClassFasilitatorReducer.results.map((my) => (
                        <div key={my.id_courses} className="fasilitator">
                          <div className="fasilitator-content flex items-center justify-between">
                            <span className="text-content mx-4">08.00 - 09.40</span>
                            <span className="text-content mx-4">{my.class_name}</span>
                            <span className="text-content mx-4">
                              {my.student_count}{' '}
                              <img src={toga} alt="student icon" />
                            </span>
                          </div>
                        </div>
                      ))
                    ) : null}
                  </>
                )} */}

                <div className="flex justify-center items-center mb-4 mt-10 flex-row">
                  <Link href="/fasilitator/dashboard" className="btn btn-primary-color r-15px bg-blue-400 flex items-center p-1 pr-5">
                    <Image src={task} className="new-task-img mr-2" alt="New-Task" />
                    <span>New Task</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Chat className="bg-white border-gray" /> */}
      </div>
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

export default DashboardFasilitator;
