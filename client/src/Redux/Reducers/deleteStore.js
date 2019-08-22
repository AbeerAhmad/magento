import * as actionTypes from '../actionTypes';



const initialState = {
    isLoading: false
}

const deleteStore = (state = initialState, action) => {

   
    switch (action.type) {
        case actionTypes.DELETE_STORE:{
            return { ...state, isLoading: true,  user: null };
        }

        case actionTypes.DELETE_STORE_FAILED:{
            return { ...state, isLoading: false,err:action.err,  user: null };//,
        }
        case actionTypes.DELETE_STORE_SUCCESS:{
            return { ...state, isLoading: false,  user: null };
        }
          default:
          return state;
      }
    
}

export default deleteStore