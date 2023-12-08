// Reducers.js
'use client'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../ActionCreators/ActionTypes';

const initialState = {
    token: null,
    loading: false,
    error: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, token: action.payload.token, error: null };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, error: null };
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};
