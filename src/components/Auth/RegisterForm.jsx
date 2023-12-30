// RegisterForm.js
'use client'
import React, { Component } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import { connect } from 'react-redux';
import { registerUser } from '@/Redux/Actions/AuthActions';

class RegisterForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordMatch: '',
        error: null,
        success: null,
        loading: false,
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
        const { username, email, password, passwordMatch } = this.state;
        const userData = {
            username,
            email,
            password,
            passwordMatch,
        };

        this.setState({ loading: true, success: null, error: null });

        try {
            await this.props.registerUser(userData);
            this.setState({ success: 'Registration Successful' });
        } catch (err) {
            this.setState({ error: 'Registration Failed', loading: false });
            console.error(err);
        }
    };

    render() {
        return (
            <div className="container mx-auto p-4">
                <div className="lg:w-full md:w-full sm:w-1/2">
                    <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-600">Username</label>
                            <input type="text" className="w-full mt-1 p-2 border rounded bg-white" name="username" onChange={this.handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                            <input type="text" className="w-full mt-1 p-2 border rounded bg-white" name="email" onChange={this.handleChange} required />
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                                <input type="password" className="w-full mt-1 p-2 border rounded" name="password" onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                                <label htmlFor="passwordMatch" className="block text-sm font-semibold text-gray-600">Confirm Password</label>
                                <input type="password" className="w-full mt-1 p-2 border rounded" name="passwordMatch" onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="mb-4">
                            <button
                                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                type="submit"
                                disabled={this.state.loading}
                            >
                                {this.state.loading ? 'Registering...' : 'Register'}
                            </button>
                        </div>
                        
                        <Link href="../../auth/login" className="w-full p-2 bg-gray-300 text-black rounded hover:bg-gray-500 flex items-center justify-center">
                            Register as Fasilitator
                        </Link>

                        <div className="text-center mt-4">
                            <span className="text-sm text-gray-600">Have an Account? </span>
                            <Link href="../../auth/login" className="text-blue-500">Login</Link>
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
        );
    }
}

export default connect(null, { registerUser })(RegisterForm);
