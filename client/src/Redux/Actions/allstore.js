import * as actionTypes from '../actionTypes';

export const SAVE_NEW_STORE = ()=>( {

    type:actionTypes.SAVE_NEW_STORE_LOADING
})


export const NEW_STORE_SAVED = ()=>({
    type:actionTypes.ADD_NEW_STORE_SUCCESS
})
export const NEW_STORE_FAILED = (err)=>({
    type:actionTypes.ADD_NEW_STORE_FAILED,
    err:err

})

export const DELETE_STORE = ()=>({
    type:actionTypes.DELETE_STORE
})


export const DELETE_STORE_SUCCESS = ()=>({
    type:actionTypes.DELETE_STORE_SUCCESS
})
export const DELETE_STORE_FAILED = (err)=>({
    type:actionTypes.DELETE_STORE_FAILED,
    err:err

})

export const ALL_STORE = (data)=>({
    type:actionTypes.GET_ALL_STORE,
    payload:data

})






