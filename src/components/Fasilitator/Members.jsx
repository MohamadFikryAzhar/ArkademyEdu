import React from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import '../../../public/circle.css';
import '../../../public/style.css';
import forward from "../../app/images/icons/forward-icon.svg";
// import search from "../../app/images/icons/search-icon.svg";
import cover from "../../app/images/img/class-detail-cover.png";
import software from "../../app/images/icons/software-category-icon.svg"


// const customStyles = {
//     content: {
//         top: '15%',
//         right: '25%',
//         bottom: '15%',
//         left: '40%',
//         backgroundColor: 'rgb(255,255,255,1)'
//     },
//     overlay: {
//         backgroundColor: 'rgb(230,237,246,0.75)'
//     }
// };

function Member() {
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            {/* <MobileNav /> */}
            <div className="dashboard-container">
                {/* <SideMenu /> */}
                <div id="main-content" className="bg-transparent p-3 flex flex-col justify-start">
                    <h1 className="flex items-center">
                        <Link to="./Activity">
                            <Image className="rotate-180" src="../images/icons/forward-icon.svg" alt="prev page" />
                        </Link>
                        Fundamental
                    </h1>
                    <div className="card bg-white border-0 p-0 rounded-10">
                        <div className="class-detail-cover-container">
                            <Image src="../images/img/class-detail-cover.png" className="class-cover-image rounded-top-10"
                                alt="Cover" />

                            <div className="cover-description">
                                <div className="category-icon-container rounded-10">
                                    <Image src="../images/icons/software-category-icon.svg" alt="software category" />
                                </div>
                                <div className="cover-description-content flex justify-between items-center">
                                    <div>
                                        <h2 className="cover-title">Fundamental</h2>
                                        <div className="cover-description-level">
                                            <span>Level : Beginner</span>
                                            <span>Category : Software</span>
                                            <span>Price : Free</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-success rounded-15 px-3 py-2 text-white mt-2 md:mt-0 lg:mt-0">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-header border-0 col-12 col-md-12 col-lg-12 p-0 mt-5 ">
                        </div>
                        <div className="card-body">
                            <div className="class-description-container">
                                <div className="tab-menu-container">
                                    <Link to="./Class-Details" className="tab-menu cursor-pointer text-link">
                                        Information</Link>
                                    <Link to="./Class-Progress" className="tab-menu cursor-pointer text-link">Class
                                        Progress</Link>
                                    <div className="tab-menu">Class Discussion</div>
                                    <Link to="./Member" className="tab-menu active cursor-pointer text-link">Member </Link>
                                </div>

                                <div className="description">
                                    {/* <Modal isOpen={modalIsOpen}
                                        shouldCloseOnOverlayClick={false}
                                        onRequestClose={() => setModalIsOpen(false)}
                                        style={customStyles}>
                                        <div className="flex items-center justify-between flex-grow-1"> */}
                                            <Image src="../images/photo-profile/profile-deddy.png" alt="Deddy Corbuzier" />
                                            <div>
                                                <div><span className="member-name">Deddy Corbuzier</span></div>
                                            </div>
                                            <div onClick={() => setModalIsOpen(false)} className="cursor-pointer"><Image className="black" src="../images/icons/modal-close.png" alt="close" /></div>
                                        </div>
                                        <div className="modal-content flex-row mt-4 items-center justify-between">
                                            <span className="text-content mx-4">HTML Essential Training</span>
                                            <span className="complete-score mx-4">32 </span>
                                        </div>
                                        <div className="modal-content flex-row items-center justify-between">
                                            <span className="text-content mx-4">CSS Essential Training</span>
                                            <span className="low-score mx-4">42</span>
                                        </div>
                                        <div className="modal-content flex-row items-center justify-between">
                                            <span className="text-content mx-4">Javascript Essential Training</span>
                                            <span className="veryLow-score mx-4">21</span>
                                        </div>
                                        <div className="modal-content flex-row items-center justify-between">
                                            <span className="text-content mx-4">Responsive Layout</span>
                                            <span className="complete-score mx-4">98</span>
                                        </div>
                                        <div className="modal-content flex-row items-center justify-between">
                                            <span className="text-content mx-4">Mid-Term-Exam</span>
                                            <span className="veryGood-score mx-4">86</span>
                                        </div>
                                        <div className="modal-content flex-row items-center justify-between">
                                            <span className="text-content mx-4">Bootstrap4 Essential Training</span>
                                            <span className="badge badge-ongoing mx-2 my-2 rounded-15">Unfinished</span>
                                        </div>
                                        <div className="modal-content flex-row items-center justify-between">
                                            <span className="text-content mx-4">Sass Essential Training</span>
                                            <span className="badge badge-ongoing mx-2 my-2 rounded-15">Unfinished</span>
                                        </div>
                                        <div className="modal-content flex-row items-center justify-between">
                                            <span className="text-content mx-4">Learning React.Js</span>
                                            <span className="badge badge-ongoing mx-2 my-2 rounded-15">Unfinished</span>
                                        </div>
                                    {/* </Modal> */}
                                    <div onClick={() => setModalIsOpen(true)} className="cursor-pointer member">
                                        <div className="flex items-center justify-between flex-grow-1">
                                            <Image src="../images/photo-profile/profile-deddy.png" alt="Deddy Corbuzier" />
                                            <div>
                                                <div><span className="member-name">Deddy Corbuzier</span></div>
                                            </div>
                                            <div><Image className="black" src="../images/icons/List.png" alt="list-black" /></div>
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

export default Member;
