import * as actionTypes from '../actionTypes'


const initial_state = {
    loading:false
}



const dispatch = (state = initial_state,action)=>{
    switch(action.type){
        case actionTypes.CREATING_DISPATCH:{
            return {
                loading:true
            }
        }
        case actionTypes.CREATING_DISPATCH_FAILURE:{
            return {
                loading:false,
                err:action.err
            }
        }
        case actionTypes.CREATING_DISPATCH_SUCCESS:{
            return {
                loading:false
            }
        }
        default:{
            return state
        }
    }
}


export default dispatch