




import * as actionTypes from '../actionTypes';

export const CREATING_DISPATCH = ()=>( {

    type:actionTypes.CREATING_DISPATCH
})


export const CREATING_DISPATCH_SUCCESS = ()=>({
    type:actionTypes.CREATING_DISPATCH_SUCCESS
})
export const CREATING_DISPATCH_FAILURE = (err)=>({
    type:actionTypes.CREATING_DISPATCH_FAILURE,
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

// export const ALL_STORE = (data)=>({
//     type:actionTypes.GET_ALL_STORE,
//     payload:data

// })






