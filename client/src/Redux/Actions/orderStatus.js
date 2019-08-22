import * as actionTypes from '../actionTypes';

export const SAVE_NEW_STATUS = ()=>({
    type:actionTypes.SAVE_NEW_STATUS
})


export const SAVE_STATUS_SUCCESS = ()=>({
    type:actionTypes.SAVE_STATUS_SUCCESS
})
export const SAVE_STATUS_FAILED = (err)=>({
    type:actionTypes.SAVE_STATUS_FAILED,
    err:err

})

// export const DELETE_STORE = ()=>({
//     type:actionTypes.DELETE_STORE
// })


// export const DELETE_STORE_SUCCESS = ()=>({
//     type:actionTypes.DELETE_STORE_SUCCESS
// })
// export const DELETE_STORE_FAILED = (err)=>({
//     type:actionTypes.DELETE_STORE_FAILED,
//     err:err

// })

export const ALL_STORE = (data)=>({
    type:actionTypes.GET_ALL_STATUS,
    payload:data

})






