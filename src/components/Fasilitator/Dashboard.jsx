import React /*{ useEffect, useRef }*/ from 'react';
// import { connect } from 'react-redux';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../Navigation';
import Sidebar from '../Sidebar';
import Chat from '../Chat';
import news from "../../app/images/img/news-image-1.jpg";
import calendar from "../../app/images/icons/calendar-icon.svg";
// import toga from "../../app/images/icons/toga-icon.png";
import task from "../../app/images/icons/new-icon.png";

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
      <Navigation />
      <div className="dashboard-container">
        <Sidebar/>
        <div id="dashboard-peserta">
          <div className="news-card r-10px">
            <h5 className="news-title">News</h5>
            <div className="news-image-container">
              <Image
                className="w-100"
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
                {/* ... */}
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

                <div className="flex justify-center items-center mb-4 mt-3">
                  <Link href="/Dashboard" className="btn btn-primary-color r-15px" type="button">
                      <Image src={task} className="new-task-img" alt="New-Task" />New Task
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Chat className="bg-white border-gray" />
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
//         getMyClassFasilitator('http://localhost:8000/courses/api/myClassFasilitator/?page=1&limit=3')
//       ),
//   };
// };

// const ConnectedDashboardFasilitator = connect(mapStateToProps, mapDispatchToProps)(DashboardFasilitator);

export default DashboardFasilitator;
