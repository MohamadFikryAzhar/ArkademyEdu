import React from "react";
import Link from "next/link";
import Image from "next/image";
import 'tailwindcss/tailwind.css';
import '../../../public/circle.css';
import '../../../public/style.css';
import list from "../../app/images/icons/list-icon.svg";
import forward from "../../app/images/icons/forward-icon.svg";
import search from "../../app/images/icons/search-icon.svg";
import toga from "../../app/images/icons/toga-icon.png";

function ActivityFasilitator(props) /*extends Component*/ {

    // state = {
    //     className: "",
    //     categoryId: 1,
    //     description: "",
    //     level_id: 1,
    //     class_price: 0,
    //     schedule: "2020-11-06",
    //     start_time: "",
    //     finish_time: "",
    //     image: null
    // }

    // handleChange = (e) => {
    //     console.log(e.target.name, e.target.value);
    //     const { name, value } = e.target;
    //     this.setState({
    //         [name]: value,
    //     });
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
        
    //     formData.append("className", this.state.className)
    //     formData.append("categoryId", this.state.categoryId)
    //     formData.append("description", this.state.description)
    //     formData.append("level_id", this.state.level_id)
    //     formData.append("class_price", this.state.class_price)
    //     formData.append("schedule", this.state.schedule)
    //     formData.append("start_time", this.state.start_time)
    //     formData.append("finish_time", this.state.finish_time)
    //     formData.append(
    //         "image", this.state.image
    //     )

    //     Axios
    //         .post("http://localhost:4000/courses/api/addClass", formData, {
    //             headers: { 'x-access-token' : localStorage.getItem("token")}
    //         })
    //         .then((result) => {
    //             alert("Add New Class Complete");
    //             if (result.data.success) {
    //                 this.props.history.push('/Fasilitator/Dashboard')
    //             }
    //             console.log(result);
    //             this.setState({
    //                 className: "",
    //                 categoryId: 1,
    //                 description: "",
    //                 level_id: 1,
    //                 class_price: 0,
    //                 schedule: "",
    //                 start_time: "",
    //                 finish_time: "",
    //                 image : null
    //             });
    //         })
    //         .catch((err) => {
    //             alert("Register Failed");
    //             console.error(err)
    //         });
    // };

        return (
            <>
                {/* <Navbar /> */}
                <div className="dashboard-container">
                    {/* <SideMenu /> */}
                    <div id="main-content" className="bg-transparent p-3 d-flex flex-column justify-start">
                        <h1 className="text-2xl font-montserrat font-bold">Activity</h1>
                        <div className="card bg-transparent border-0 p-0">
                            <div className="card-header bg-transparent border-0 text-2xm font-montserrat font-bold py-6 px-4">
                                My Class
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table my-class-table table-responsive w-full">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center"><input type="checkbox" name="" id="" /></th>
                                                <th scope="col">Class Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Schedule</th>
                                                <th scope="col">Student</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                                <td height="50px"><Link href="../user/class/detail" className="text-link">Learn C# </Link></td>
                                                <td>Software</td>
                                                <td>Learn the fundamentals of C#</td>
                                                <td>Friday, 08:00 - 09:40</td>
                                                <td align="center">1 <Image src={toga} alt="student icon" /></td>
                                                <td><Image src={list} alt="list icon" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                                <td height="50px">Learn C</td>
                                                <td>Software</td>
                                                <td>Learn the newest C</td>
                                                <td>Monday, 13:00 - 14:40</td>
                                                <td align="center">0 <Image src={toga} alt="student icon" /></td>
                                                <td><Image src={list} className="" alt="list icon" /></td>
                                            </tr>

                                            <tr>
                                                <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                                <td height="50px">Learn PHP</td>
                                                <td>Software</td>
                                                <td>Learn PHP</td>
                                                <td>Monday, 15:00 - 16:40</td>
                                                <td align="center">0 <Image src={toga} alt="student icon" /></td>
                                                <td><Image src={list} alt="list icon" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex items-center justify-center">
                                        <Link href="./dashboard" className="view-all cursor-pointer">view all
                                        <Image src={forward} width="12" height="12" alt="icon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1>Create New Class</h1>
                        <div className="card bg-transparent border-0 p-0">
                            <div className="card-body bg-white p-0 rounded-xl">
                                <form /*onSubmit={this.handleSubmit}*/>
                                    <div className="form-activity ">
                                        <div className="row mx-3 mt-3 gap-5">
                                            <div className={"form-side col-12 col-lg-5"}>
                                                <div className="form-row flex flex-row gap-3 pb-3 pt-3">
                                                    Class Name :{" "}
                                                    <input
                                                        type="text"
                                                        name="className"
                                                        className="activity-input w-50 bg-gray-200 border rounded-l"
                                                        placeholder="Input Class Name"
                                                        required
                                                    />
                                                </div>

                                                <div className="form-row pb-3">
                                                    Category :{" "}
                                                    <select name="category_id" /*onChange={this.handleChange}*/>
                                                        <option value={1}>Software</option>
                                                        <option value={2}>History</option>
                                                        <option value={3}>Psychology</option>
                                                        <option value={4}>Finance</option>
                                                        <option value={5}>Math</option>
                                                        <option value={6}>Science</option>
                                                    </select>
                                                </div>
                                                <div className="form-row pb-3">
                                                    Level :{""}
                                                    <select name="level_id" /*onChange={this.handleChange}*/>
                                                        <option value={1}>Beginner</option>
                                                        <option value={2}>Intermediate</option>
                                                        <option value={3}>Advance</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-side col-12 col-lg-7">
                                                <div className="form-row flex flex-row pb-3">
                                                    Pricing :{" "}
                                                    <div className="form-check form-check-inline mx-3">
                                                        <input
                                                            className="form-price bg-gray-200 border rounded-xl pl-4"
                                                            type="number"
                                                            name="class_price"
                                                            // onChange={this.handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex form-row pb-3">
                                                    Schedule :{" "}
                                                    <select name="" id="">
                                                        <option value="fr">Friday</option>
                                                    </select>
                                                    <div className={"form-row w-50 mx-2"}>
                                                        <input
                                                            type="text"
                                                            className={"activity-input w-25"}
                                                            placeholder={"00:00"}
                                                            name="start_time"
                                                            // onChange={this.handleChange}
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            className={"activity-input w-25"}
                                                            placeholder={"00:00"}
                                                            name="finish_time"
                                                            // onChange={this.handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="mx-3">Description:</span>
                                        <textarea
                                            className={"activity-text-area mx-3 w-full border rounded-xl border-black bg-gray-200"}
                                            name="description"
                                            cols="30"
                                            rows="10"
                                            // onChange={this.handleChange}
                                            required
                                        ></textarea>
                                        <input type="file" /*onChange={this.handleChange}*/ name="image" />
                                        <div className="button-create-class">
                                            <button type="submit" className={"btn btn-register my-1 create-class bg-green-400 border rounded-xl p-4"}>
                                                <span className="text-color-3">Create </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };

export default ActivityFasilitator;
