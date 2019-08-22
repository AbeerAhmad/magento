import * as actionTypes from '../actionTypes';

export const login_loading = ()=>({
    type:actionTypes.LOGIN_LOADING
})

export const login_failed = (errMess)=>({
    type:actionTypes.LOGIN_FAILED,
    errMess
})

export const login_success = (user)=>({
    type:actionTypes.LOGIN_SUCCESS,
    user
})


