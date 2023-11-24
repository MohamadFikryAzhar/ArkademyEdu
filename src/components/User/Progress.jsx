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

function ClassProgress(props) {
    // const { getStudentProgressReducer, getProgress } = props;
    // const getRef = useRef();

    // useEffect(() => {
    //     if (!getRef.current) {
    //         getProgress();
    //         getRef.current = true;
    //     }
    // }, [getProgress, getRef]);

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
                    <div className="card bg-white border-0 p-0 rounded-xl">
                        <div className="class-detail-cover-container">
                            <Image src={cover} className="class-cover-image rounded-xl"
                                alt="Cover" />
                            <div className="cover-description">
                                <div className="category-icon-container rounded-xl">
                                    <Image src={software}alt="software category" />
                                </div>
                                <div className="cover-description-content flex-grow-1">
                                    <div className="flex-grow-1">
                                        <h2 className="cover-title">Fundamental</h2>
                                        <div className="cover-description-level">
                                            <span>Level : Beginner</span>
                                            <span>Category : Software</span>
                                            <span>Price : Free</span>
                                        </div>
                                        <div className="horizontal-progress-container flex-grow-1">
                                            <span>80% to complete</span>
                                            <div className="horizontal-background w-full">
                                                <span className="horizontal-progress w-80"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center md:flex hidden">
                                        <span>Your Score</span>
                                        <span className="score">86</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center flex md:hidden">
                                    <span>Your Score</span>
                                    <span className="score">86</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-header border-0 col-12 col-md-12 col-lg-12 p-0 mt-5">
                        </div>
                        <div className="card-body pt-10">
                            <div className="class-description-container class-progress-container">
                                <div className="tab-menu-container">
                                    <Link href="./detail" className="tab-menu cursor-pointer text-link">
                                        Information
                                    </Link>
                                    <Link href="./progress" className="tab-menu active cursor-pointer text-link">
                                        Class Progress
                                    </Link>
                                    <div className="tab-menu">Class Discussion</div>
                                </div>
                                <div className="description">
                                    <div className="table-responsive mt-0 w-full">
                                        <table className="table table-borderless new-class-table progress-class-table p-1 w-full">
                                            <tbody>
                                                {/* {getStudentProgressReducer.isPending ? (
                                                    <div> Loading... </div>
                                                ) : (
                                                    <>
                                                        {getStudentProgressReducer.isFulfilled
                                                            ? getStudentProgressReducer.results.map((my) => ( */}
                                                                <tr>
                                                                    <th scope="row"><input type="checkbox" /></th>
                                                                    <td>
                                                                        <span className="font-semibold">
                                                                            Next JS
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="font-semibold">
                                                                            Friday, 27 November 2020 <br /> 08.00 - 09.40
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="score">
                                                                            86
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><input type="checkbox" /></th>
                                                                    <td>
                                                                        <span className="font-semibold">
                                                                            Tailwind CSS
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="font-semibold">
                                                                            Friday, 27 November 2020 <br /> 08.00 - 09.40
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="score">
                                                                            90
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><input type="checkbox" /></th>
                                                                    <td>
                                                                        <span className="font-semibold">
                                                                            Express JS
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="font-semibold">
                                                                            Friday, 27 November 2020 <br /> 08.00 - 09.40
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="score">
                                                                            42
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            {/* ))
                                                            : null}
                                                    </>
                                                )} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// const mapStateToProps = (state) => {
//     const { getStudentProgressReducer } = state;
//     return {
//         getStudentProgressReducer,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getProgress: () =>
//             dispatch(
//                 getStudentProgress("http://localhost:8000/courses/api/studentprogress/")
//             ),
//     };
// };

// const ConnectedClassProgress = connect(mapStateToProps, mapDispatchToProps)(ClassProgress);

export default ClassProgress;
