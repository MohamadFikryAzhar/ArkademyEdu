import React from "react";
import Link from "next/link";
import Image from "next/image";
import 'tailwindcss/tailwind.css';
import '../../../public/circle.css';
import '../../../public/style.css';
import list from "../../app/images/icons/list-icon.svg";
import forward from "../../app/images/icons/forward-icon.svg";
import search from "../../app/images/icons/search-icon.svg"
// import Navigation from "../Navigation";
// import { connect } from "react-redux";
// import { getMyClassPaginated } from "../../../Redux/ActionCreators/GetMyClass"
// import { getAllCoursesPaginated } from "../../../Redux/ActionCreators/GetAllCourses"

function UserActivity(props) {
    // const {
    //     getMyClassReducer,
    //     getMyClass,
    //     getAllCoursesReducer,
    //     getAllCourses,
    // } = props
    // const getRef = useRef();
    // useEffect(() => {
    //     if (!getRef.current) {
    //         getMyClass();
    //         getAllCourses();
    //         getRef.current = true;
    //     }
    // }, [getMyClass, getAllCourses]);

    return (
        <>
            {/* <Navigation /> */}
            <div className="dashboard-container">
                {/* <SideMenu /> */}
                <div id="main-content" className="bg-transparent p-3 d-flex flex-column justify-content-start">
                    <h1 className="text-2xl font-montserrat font-bold">Activity</h1>
                    <div className="card bg-transparent border-0 p-0">
                        <div className="card-header bg-transparent border-0 text-2xm font-montserrat font-bold sm:py-6 sm:px-4">
                            My Class
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table my-class-table table-responsive w-full">
                                    <thead className="bg-transparent">
                                        <tr className="bg-transparent">
                                            <th scope="col" className="text-center"><input type="checkbox" name="" id="" /></th>
                                            <th scope="col" className="pr-10 sm:pr-5">Class Name</th>
                                            <th scope="col" className="hidden sm:table-cell">Category</th>
                                            <th scope="col" className="hidden sm:table-cell">Description</th>
                                            <th scope="col">Progress</th>
                                            <th scope="col" className="hidden sm:table-cell">Status</th>
                                            <th scope="col">Score</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Your table rows go here */}
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td className="pr-5 text-center">Fundamental</td>
                                            <td className="pr-5 hidden sm:table-cell">Programming</td>
                                            <td className="text-table pr-5 hidden sm:table-cell">This is Fundamental</td>
                                            <td>
                                                <div className="c100 p89 small pr-5">
                                                    <span>89%</span>
                                                    <div className="slice">
                                                        <div className="bar"></div>
                                                        <div className="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-ongoing p-2 r-15px pr-5 hidden sm:table-cell">Ongoing</span></td>
                                            <td><span className="good-score"> 89</span></td>
                                            <td><Image src={list} alt="list" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td className="pr-5 text-center">React Native</td>
                                            <td className="pr-5 hidden sm:table-cell">Software</td>
                                            <td className="text-table pr-5 hidden sm:table-cell">How to make a React Native Project</td>
                                            <td>
                                                <div className="c100 p21 small pr-5">
                                                    <span>21%</span>
                                                    <div className="slice">
                                                        <div className="bar"></div>
                                                        <div className="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-complete p-2 r-15px hidden sm:table-cell">Completed</span></td>
                                            <td><span className="veryLow-score"> 21</span></td>
                                            <td><Image src={list} alt="list" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td className="pr-5 text-center">Fundamental</td>
                                            <td className="pr-5 hidden sm:table-cell">Programming</td>
                                            <td className="text-table pr-5 hidden sm:table-cell">This is Fundamental</td>
                                            <td>
                                                <div className="c100 p54 small pr-5">
                                                    <span>69%</span>
                                                    <div className="slice">
                                                        <div className="bar"></div>
                                                        <div className="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-ongoing p-2 r-15px pr-5 hidden sm:table-cell">Ongoing</span></td>
                                            <td><span className="medium-score"> 69</span></td>
                                            <td><Image src={list} alt="list" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td className="pr-5 text-center">Fundamental</td>
                                            <td className="pr-5 hidden sm:table-cell">Programming</td>
                                            <td className="text-table pr-5 hidden sm:table-cell">This is Fundamental</td>
                                            <td>
                                                <div className="c100 p89 small pr-5">
                                                    <span>89%</span>
                                                    <div className="slice">
                                                        <div className="bar"></div>
                                                        <div className="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge badge-ongoing p-2 r-15px pr-5 hidden sm:table-cell">Ongoing</span></td>
                                            <td><span className="good-score"> 89</span></td>
                                            <td><Image src={list} alt="list" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Link href="./myclass" className="view-all cursor-pointer">view all
                                        <Image src={forward} width="12" height="12" alt="next" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 p-0 mt-4 mt-md-5 col-12 bg-white border rounded-xl">
                        <div className="card-header bg-transparent border-0 text-2xm font-montserrat font-bold py-6 px-4">
                            New Class
                        </div>
                        <div className="card-body p-2">
                            <div className="input-group relative flex flex-row">
                                <Image src={search} alt="search icon" className="absolute top-1/2 transform -translate-y-1/2 left-2" />
                                <input type="text" className="form-control col-12 pl-8 py-2 pr-4 rounded-l border border-gray-300 w-full" placeholder="Quick Search"
                                    aria-label="Quick Search" aria-describedby="button-addon2" />
                                <button className="btn btn-primary-color text-s bg-blue-400 border rounded-l p-2" type="button" id="button-addon2">Search</button>
                            </div>
                            <div className="mt-0 col-12 search-filter mb-3">
                                <select name="category" id="category">
                                    <option value="">Categories</option>
                                </select>
                                <select name="level" id="level">
                                    <option value="">Level</option>
                                </select>
                                <select name="pricing" id="pricing">
                                    <option value="">Pricing</option>
                                </select>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-borderless new-class-table table-style w-full pb-4">
                                    <thead>
                                        <tr>
                                            <th scope="col">Class Name</th>
                                            <th scope="col" className="hidden sm:table-cell">Category</th>
                                            <th scope="col" className="hidden sm:table-cell">Description</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Pricing</th>
                                            <th scope="col"></th>
                                            <th scope="col" className="hidden sm:table-cell"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Your table rows go here */}
                                        <tr className="w-full sm:gap-5">
                                            <td className="text-center">Fundamental</td>
                                            <td className="hidden sm:table-cell">Programming</td>
                                            <td className="text-table hidden sm:table-cell">This is Fundamental</td>
                                            <td className="">Beginner</td>
                                            <td><span className="text-gray-400"> Free</span></td>
                                            <td><span className="badge badge-complete p-2 r-15px">Register</span></td>
                                            <td><Image src={list} alt="list" className="hidden sm:table-cell"/></td>
                                        </tr>
                                        <tr className="w-full">
                                            <td className="text-center">Fundamental</td>
                                            <td className="hidden sm:table-cell">Programming</td>
                                            <td className="text-table hidden sm:table-cell">This is Fundamental</td>
                                            <td className="">Beginner</td>
                                            <td><span className="text-gray-400"> Free</span></td>
                                            <td><span className="badge badge-complete p-2 r-15px">Register</span></td>
                                            <td><Image src={list} alt="list" className="hidden sm:table-cell"/></td>
                                        </tr>
                                        <tr className="w-full">
                                            <td className="text-center">Fundamental</td>
                                            <td className="hidden sm:table-cell">Programming</td>
                                            <td className="text-table hidden sm:table-cell">This is Fundamental</td>
                                            <td className="">Beginner</td>
                                            <td><span className="text-gray-400"> Free</span></td>
                                            <td><span className="badge badge-complete p-2 r-15px">Register</span></td>
                                            <td><Image src={list} alt="list" className="hidden sm:table-cell"/></td>
                                        </tr>
                                        <tr className="w-full">
                                            <td className="text-center">Fundamental</td>
                                            <td className="pr-5 hidden sm:table-cell">Programming</td>
                                            <td className="text-table hidden sm:table-cell">This is Fundamental</td>
                                            <td className="pr-5">Beginner</td>
                                            <td><span className="text-gray-400"> $120</span></td>
                                            <td><span className="badge badge-complete p-2 r-15px">Register</span></td>
                                            <td><Image src={list} alt="list" className="hidden sm:table-cell"/></td>
                                        </tr>
                                    </tbody>
                                    {/* <tbody>
                                        {getAllCoursesReducer.isPending ? (
                                            <div> Loading... </div>
                                        ) : (
                                            <>
                                                {getAllCoursesReducer.isFulfilled
                                                    ? getAllCoursesReducer.results.map((my) => (
                                                        <tr key={my.id_courses} className="cursor-pointer">
                                                            <td><Link to="Class-Detail" className="text-link" key={my.id_courses}>{my.class_name}</Link> </td>
                                                            <td>{my.category_name}</td>
                                                            <td className="text-table">{my.description}</td>
                                                            <td>{my.level_name}</td>
                                                            <td>{my.class_price}$</td>
                                                            <td><span className="badge btn-success r-15px">Register</span> </td>
                                                            <td><img src="../images/icons/list-icon.svg" alt="list" /></td>
                                                        </tr>
                                                    ))
                                                    : null}
                                            </>
                                        )}
                                    </tbody> */}
                                </table>
                            </div>
                            <div className="col-12 pagination-container flex flex-row justify-content-between align-items-center pb-2 sm:pb-0">
                                {/* {getAllCoursesReducer.isFulfilled ? <span className="w-100">Showing 10 out of {getAllCoursesReducer.info.count} </span> : <span className="w-100">Showing 0 </span>} */}
                                <div className="flex flex-row justify-content-evenly">
                                    <div className="table-page "><Image className="rotate-180" src={forward} alt="next" />
                                    </div>
                                    <span className="table-page active">1</span>
                                    <span className="table-page ">2</span>
                                    <span className="table-page ">3</span>
                                    <span className="table-page ">4</span>
                                    <span className="table-page ">5</span>
                                    <div className="table-page "><Image src={forward} alt="next" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// const mapStateToProps = (state) => {
//     const { getMyClassReducer, getAllCoursesReducer } = state;
//     return {
//         getMyClassReducer,
//         getAllCoursesReducer
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMyClass: () =>
//             dispatch(
//                 getMyClassPaginated("http://localhost:8000/courses/api/myClass/?page=1&limit=3")
//             ),
//         getAllCourses: () =>
//             dispatch(
//                 getAllCoursesPaginated("http://localhost:8000/courses/api/all?search=&sort=&page=1&limit=10")
//             ),
//     };
// };

// const ConnectedActivity = connect(mapStateToProps, mapDispatchToProps)(Activity);

export default UserActivity;