'use client'
import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Modal from './Modal';
import { connect } from 'react-redux';
import { loginUser } from '@/Redux/Actions/AuthActions';

class LoginForm extends Component {
    state = {
        userNameOrEmail: '',
        password: '',
        error: null,
        success: null,
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleCloseModal = () => {
        this.setState({ error: null, success: null });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { userNameOrEmail, password } = this.state;
        const body = {
            userNameOrEmail,
            password,
        };

        this.setState({ error: null, success: null });

        this.props.login(body);

    };
    render() {
        return (
            <>
                <Head>
                    <title>Login</title>
                </Head>
                <div className="container mx-auto p-4" >
                    <div className="lg:w-full md:w-full sm:w-1/2">
                        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="userName" className="block text-sm font-semibold text-gray-600">Username or Email</label>
                                <input type="text" className="w-full mt-1 p-2 border rounded bg-white" name="userNameOrEmail" onChange={this.handleChange} required />
                            </div>
                            <div className="mb-4">
                                <div className="relative">
                                    <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                                    <input type="password" className="w-full mt-1 p-2 border rounded" name="password" onChange={this.handleChange} required />
                                </div>
                            </div>

                            <Link href="/reset-password" className="block text-sm text-black-500 mt-2 mb-2 text-end hover:text-white">Forgot password?</Link>

                            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Login</button>
                            {/* <Link href="/user/dashboard" className="mb-4"></Link> */}

                            <Link href="/fasilitator/dashboard" className="mt-4 w-full p-2 bg-gray-300 text-black rounded hover:bg-gray-500 flex items-center justify-center">Login as Fasilitator
                            </Link>

                            <div className="text-center mt-4">
                                <span className="text-sm text-gray-600">New user? </span>
                                <Link href="../../auth/register" className="text-blue-500">Register</Link>
                            </div>
                        </form>
                        {this.state.success && (
                            <Modal message={this.state.success} onClose={this.handleCloseModal} />
                        )}

                        {this.state.error && (
                            <Modal message={this.state.error} onClose={this.handleCloseModal} />
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default connect(null, { loginUser })(LoginForm);