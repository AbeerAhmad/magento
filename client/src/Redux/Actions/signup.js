




import * as actionTypes from '../actionTypes';

export const CREATING_USER = ()=>( {

    type:actionTypes.CREATING_USER
})


export const CREATING_USER_SUCCESS = ()=>({
    type:actionTypes.CREATING_USER_SUCCESS
})
export const CREATING_USER_FAILURE = (err)=>({
    type:actionTypes.CREATING_USER_FAILURE,
    err:err

})
