import React from "react";
import Link from "next/link";
import Image from "next/image";
import 'tailwindcss/tailwind.css';
import '../../../public/circle.css';
import '../../../public/style.css';
import list from "../../app/images/icons/list-icon.svg";
import forward from "../../app/images/icons/forward-icon.svg";
import search from "../../app/images/icons/search-icon.svg"
// import Navigation from '../Navigation';
// import SideMenu from './SideMenu';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getMyClassPaginated } from '../../../Redux/ActionCreators/GetMyClass';

function MyClass(props) {
    // const { getMyClassReducer, getMyClass } = props;
    // const getRef = useRef();

    // useEffect(() => {
    //     if (!getRef.current) {
    //         getMyClass();
    //         getRef.current = true;
    //     }
    // }, [getMyClass]);

    return (
        <>
            {/* <MobileNav /> */}
            <div className="dashboard-container w-full">
                {/* <SideMenu /> */}
                <div
                    id="main-content"
                    className="bg-transparent p-3 d-flex flex-column justify-content-start"
                >
                    <h1 className="card-header bg-transparent border-0 text-2xm font-montserrat font-bold flex flex-row items-center">
                        <Link href="./activity">
                            <Image
                                className="rotate-180"
                                src={forward}
                                alt="prev page"
                            />
                        </Link>
                        My Class
                    </h1>
                    <div className="card border-0 p-0">
                        <div className="card-header bg-transparent flex flex-start gap-10 w-full items-center">
                            <div className="flex flex-row justify-content-between row w-full">
                                {/* <div className="d-flex flex-row justify-content-between col-10 col-md-8" /> */}
                                {/* <Image src={search} alt="search icon" className="absolute top-1/2 transform -translate-y-1/2 left-2" /> */}
                                <input
                                    type="text"
                                    className="form-control col-12 pl-8 py-2 pr-4 rounded-l border border-gray-300 w-full"
                                    placeholder="Quick Search"
                                    aria-label="Quick Search"
                                />
                                <button className="btn btn-primary-color text-s bg-blue-400 border rounded-l p-2">
                                    Search
                                </button>
                            </div>
                            <div className="col-12 col-md-4 w-1/2">
                                <div className="sort-by-container float-start float-md-end float-lg-end my-2 my-md-0 my-lg-0 r-5px p-3">
                                    <span className="sort-by-text border-0 w-100">sort by:</span>
                                    <select className="border-0 bg-transparent border rounded-xl" name="" id="">
                                        <option value="">All Categories</option>
                                        <option value="">Price</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0 mt-4">
                        <div className="table-responsive w-full">
                            <table className="table my-class-table table-responsive w-full">
                                <thead className="bg-transparent">
                                    <tr className="bg-transparent">
                                        <th scope="col" className="text-center">
                                            <input type="checkbox" name="" id="" />
                                        </th>
                                        <th scope="col">Class Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Progress</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Score</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {getMyClassReducer.isPending ? (
                                        <div>Loading...</div>
                                    ) : (
                                        <>
                                            {getMyClassReducer.isFulfilled ? (
                                                getMyClassReducer.results.map((my) => ( */}
                                    <tr /*key={my.id_courses}*/>
                                        <th scope="row">
                                            <input type="checkbox" name="" id="" />
                                        </th>
                                        <td>Fundamental</td>
                                        <td>Programming</td>
                                        <td className="text-table">Fundamental of Programming</td>
                                        <td>
                                            <div className="c100 p80 small">
                                                <span>89%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ongoing p-2 r-15px">
                                                Ongoing
                                            </span>
                                        </td>
                                        <td>
                                            <span className="good-score"> 89</span>
                                        </td>
                                        <td>
                                            <Image
                                                src={list}
                                                alt="list"
                                            />
                                        </td>
                                    </tr>
                                    <tr /*key={my.id_courses}*/>
                                        <th scope="row">
                                            <input type="checkbox" name="" id="" />
                                        </th>
                                        <td>Fundamental</td>
                                        <td>Programming</td>
                                        <td className="text-table">Fundamental of Programming</td>
                                        <td>
                                            <div className="c100 p80 small">
                                                <span>89%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ongoing p-2 r-15px">
                                                Ongoing
                                            </span>
                                        </td>
                                        <td>
                                            <span className="good-score"> 89</span>
                                        </td>
                                        <td>
                                            <Image
                                                src={list}
                                                alt="list"
                                            />
                                        </td>
                                    </tr>
                                    <tr /*key={my.id_courses}*/>
                                        <th scope="row">
                                            <input type="checkbox" name="" id="" />
                                        </th>
                                        <td>Fundamental</td>
                                        <td>Programming</td>
                                        <td className="text-table">Fundamental of Programming</td>
                                        <td>
                                            <div className="c100 p80 small">
                                                <span>89%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ongoing p-2 r-15px">
                                                Ongoing
                                            </span>
                                        </td>
                                        <td>
                                            <span className="good-score"> 89</span>
                                        </td>
                                        <td>
                                            <Image
                                                src={list}
                                                alt="list"
                                            />
                                        </td>
                                    </tr>
                                    <tr /*key={my.id_courses}*/>
                                        <th scope="row">
                                            <input type="checkbox" name="" id="" />
                                        </th>
                                        <td>Fundamental</td>
                                        <td>Programming</td>
                                        <td className="text-table">Fundamental of Programming</td>
                                        <td>
                                            <div className="c100 p80 small">
                                                <span>89%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ongoing p-2 r-15px">
                                                Ongoing
                                            </span>
                                        </td>
                                        <td>
                                            <span className="good-score"> 89</span>
                                        </td>
                                        <td>
                                            <Image
                                                src={list}
                                                alt="list"
                                            />
                                        </td>
                                    </tr>
                                    <tr /*key={my.id_courses}*/>
                                        <th scope="row">
                                            <input type="checkbox" name="" id="" />
                                        </th>
                                        <td>Fundamental</td>
                                        <td>Programming</td>
                                        <td className="text-table">Fundamental of Programming</td>
                                        <td>
                                            <div className="c100 p80 small">
                                                <span>89%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ongoing p-2 r-15px">
                                                Ongoing
                                            </span>
                                        </td>
                                        <td>
                                            <span className="good-score"> 89</span>
                                        </td>
                                        <td>
                                            <Image
                                                src={list}
                                                alt="list"
                                            />
                                        </td>
                                    </tr>
                                    <tr /*key={my.id_courses}*/>
                                        <th scope="row">
                                            <input type="checkbox" name="" id="" />
                                        </th>
                                        <td>Fundamental</td>
                                        <td>Programming</td>
                                        <td className="text-table">Fundamental of Programming</td>
                                        <td>
                                            <div className="c100 p80 small">
                                                <span>89%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ongoing p-2 r-15px">
                                                Ongoing
                                            </span>
                                        </td>
                                        <td>
                                            <span className="good-score"> 89</span>
                                        </td>
                                        <td>
                                            <Image
                                                src={list}
                                                alt="list"
                                            />
                                        </td>
                                    </tr>

                                    {/* ))
                                            ) : null}
                                        </>
                                    )} */}
                                </tbody>
                            </table>
                        </div>
                            <div className="col-12 pagination-container flex flex-row justify-content-between align-items-center">
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
        </>
    );
}

// const mapStateToProps = (state) => {
//     const { getMyClassReducer } = state;
//     return {
//         getMyClassReducer,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMyClass: () =>
//             dispatch(
//                 getMyClassPaginated(
//                     'http://localhost:8000/courses/api/myClass/?page=1&limit=10'
//                 )
//             ),
//     };
// };

// const ConnectedMyClass = connect(mapStateToProps, mapDispatchToProps)(MyClass);

export default MyClass;
