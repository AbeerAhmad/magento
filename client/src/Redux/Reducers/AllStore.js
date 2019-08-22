import * as actionTypes from '../actionTypes';



const initialState = {
    isLoading: false
}

const allStore = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_ALL_STORE:{
            return { ...state,isLoading:false,payload:action.payload };
        }
          default:
          return state;
      }
    
}

export default allStore