import * as actionTypes from '../actionTypes'


const initial_state = {
    loading:false
}



const Signup = (state = initial_state,action)=>{
    switch(action.type){
        case actionTypes.CREATING_USER:{
            return {
                loading:true
            }
        }
        case actionTypes.CREATING_USER_FAILURE:{
            return {
                loading:false,
                err:action.err
            }
        }
        case actionTypes.CREATING_USER_SUCCESS:{
            return {
                loading:false
            }
        }
        default:{
            return state
        }
    }
}


export default Signup