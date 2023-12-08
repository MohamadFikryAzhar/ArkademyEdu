// Actions.js
'use client'
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from './ActionTypes';

// Login Actions
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: { token },
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: { error },
});

// Register Actions
export const registerRequest = () => ({
    type: REGISTER_REQUEST,
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: { error },
});

// Async Action Creators
export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const result = await axios.post('http://localhost:4000/users/api/auth/login', credentials);
        const token = result.data.data.result.token;
        dispatch(loginSuccess(token));
        localStorage.setItem('token', `Bearer ${token}`);
    } catch (error) {
        dispatch(loginFailure(error.response.data.message || 'Login Failed'));
        localStorage.removeItem('token');
        console.error(error);
    }
};

export const registerUser = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const result = await axios.post('http://localhost:4000/users/api/auth/register', userData);
        dispatch(registerSuccess());
        window.location.replace('/auth/login');
    } catch (error) {
        dispatch(registerFailure(error.response.data.message || 'Register Failed'));
        localStorage.removeItem('token');
        console.error(error);
    }
};